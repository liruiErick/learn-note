var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser'); // 用于解析客户端请求的body中的内容
var mongoose = require('mongoose');
var path = require('path');
var _ = require('underscore');

var Movie = require('./models/movie');
var User = require('./models/user');

// process 是一个环境变量
// 如果通过命令行传递参数 PORT = 4000，则可以改变 process.env.PORT 的值
var port = process.env.PORT || 3000;
var app = express(); // 启动一个web服务器

mongoose.connect('mongodb://localhost/vrwanjia'); // 链接本地数据库

app.set('views', './views/pages'); // 设置视图的根目录
app.set('view engine', 'jade'); // 设置默认的模板引擎
app.use(bodyParser.urlencoded({ extended: true })); // 将后台提交的表单数据格式化（在路由回调中通过req.body来访问提交的数据）

app.use(cookieParser()); // express.session 依赖的中间件
// 原理是从 cookie 中读取加密的 connect.sid，再通过 cookieParser 解析成对应的 sessionid
// 这个 sessionid 被保存在 req.sessionid 中
app.use(cookieSession({ secret: 'vrwanjia' })); // 之后在路由回调中可以通过 req.session 储存数据

// 使用path对象来拼接目录
// __dirname 表示当前根目录
// 这里告诉express静态资源目录为当前根目录下的bower_components目录
app.use(express.static(path.join(__dirname, 'bower_components')));
app.locals.moment = require('moment'); // 为本地变量添加一个时刻模块。（在jade模板中会被调用，用于格式化日期）
app.listen(port);

console.log('启动服务器，端口 ' + port);

// 设置路由
// 首页
app.get('/', function(req, res) {
	console.log('读取数据');
	Movie.fetch(function(err, movies) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('读取完成');
		console.log(movies);
		res.render('index', { // 返回 index.jade 模板生成的页面
			title: '首页', // 这里的 title 值用于替换 index.jade 中的 #{title} 变量
			movies: movies
		});
	});
});

// 列表页
app.get('/list', function(req, res) {
	Movie.fetch(function(err, movies) {
		if (err) {
			console.log(err);
			return;
		}
		res.render('list', {
			title: '列表页',
			movies: movies
		});
	});
});

// 详情页
app.get('/list/detail/:id', function(req, res) {
	var id = req.params.id; // 获取url中传入的id
	console.log('详情页id: ' + id);
	Movie.findById(id, function(err, movies) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(movies[0]);
		res.render('detail', {
			title: '详情页',
			movie: movies[0]
		});
	});
});

// 录入页
app.get('/admin/update/', function(req, res) {
	res.render('admin', {
		title: '后台录入页',
		movie: {
			doctor: '',
			country: '',
			title: '',
			year: '',
			poster: '',
			language: '',
			flash: '',
			summary: ''
		}
	});
});

// 更新页
app.get('/admin/update/:id', function(req, res) {
	var id = req.params.id; // 获取url中传入的id
	console.log('更新页的id: ' + id);
	Movie.findById(id, function(err, movies) {
		if (err) {
			console.log(err);
			return;
		}
		res.render('admin', {
			title: '后台更新页',
			movie: movies[0]
		});
	});
});

// 编辑页面提交
app.post('/admin/new', function(req, res) {
	console.log('接收到的表单: ' + JSON.stringify(req.body));
	var movieObj = req.body.movie; // 获取提交表单中的 movie 对象（bodyParser中间件模块解析的表单数据）
	var id = movieObj._id;
	var _movie;
	console.log('提交的id: ' + id);
	if (id) { // 如果id已经定义，表示为更新数据
		Movie.findById(id, function(err, movies) {
			if (err) {
				console.log(err);
				return;
			}
			_movie = _.extend(movies[0], movieObj); // 将提交的数据覆盖到数据库的源数据中
			_movie.save(saveCallback); // 保存数据
		});
	} else { // 如果id未定义，表示为新建数据
		delete movieObj._id; // 要删除表单提交上来的空id，否则创建数据时不会自动生成id
		_movie = new Movie(movieObj);
		_movie.save(saveCallback); // 保存数据
	}

	function saveCallback(err, movie) {
		if (err) {
			console.log(err);
			return;
		}
		res.redirect('/list/detail/' + movie._id); // 数据保存成功后跳转到详情页
	}
});

// DELETE路由
app.delete('/list', function(req, res) {
	var id = req.query.id;
	console.log('删除数据的id: ' + id);
	if (id) {
		Movie.remove({_id: id}, function(err, movie) {
			if (err) {
				console.log(err);
				return;
			}
			res.json({ success: 1 }); // 给客户端返回一个json
		});
	}
});


// 用户注册
app.post('/user/signup', function(req, res) {
	console.log('用户注册接收到的表单: ' + JSON.stringify(req.body));
	var _user = req.body.user;
	var user = new User(_user);

	User.find({name: _user.name}, function(err, user) {
		if (err) {
			console.log(err);
			return;
		}

		if (user) {
			return res.redirect('/admin/userlist');
		} else {
			var user = new User(_user);
			user.save(function(err, user) {
				if (err) {
					console.log(err);
					return;
				}

				res.redirect('/admin/userlist');
			});
		}
	});
});

// 用户登录
app.post('/user/signin', function(req, res) {
	console.log('用户登录接收到的表单: ' + JSON.stringify(req.body));
	var _user = req.body.user;
	var name = _user.name;
	var password = _user.password;

	User.findOne({name: name}, function(err, user) {
		if (err) {
			console.log(err);
			return;
		}

		if (!user) {
			return res.redirect('/');
		} else {
			user.comparePassword(password, function(err, isMatch) {
				if (err) {
					console.log(err);
					return;
				}

				if (isMatch) {
					console.log('密码正确');
					req.session.user = user; // 将user存入当前会话
					return res.redirect('/');
				} else {
					console.log('密码错误');
				}
			});
		}
	});
});

// 用户列表页
app.get('/admin/userlist', function(req, res) {
	User.fetch(function(err, users) {
		if (err) {
			console.log(err);
			return;
		}
		res.render('user-list', {
			title: '用户列表页',
			users: users
		});
	});
});