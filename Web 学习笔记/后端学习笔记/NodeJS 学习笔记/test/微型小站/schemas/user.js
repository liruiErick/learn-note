var Mongoose = require('mongoose');
var bcrypt = require('bcrypt'); // 密码加密算法库
var SALT_WORK_FACTOR = 10; // 密码计算强度常量

// 创建一个数据模式。（类似于MySQL中创建一个表结构）
var UserSchema = new Mongoose.Schema({
	name: {
		unique: true, // 表示是否是唯一的
		type: String
	},
	password: String,
	date: {
		createAt: { // 创建时间
			type: Date,
			default: Date.now()
		},
		updateAt: { // 更新时间
			type: Date,
			default: Date.now()
		}
	}
});

// 数据存储前调用
UserSchema.pre('save', function(next) {
	var user = this;

	// 这里this指该条数据
	user.date.updateAt = Date.now();
	if (user.isNew) { // 判断数据是否为新创建的
		user.date.createAt = user.date.updateAt;
	}

	// 生成加密盐
	// 第一个参数表示计算强度，强度越大，破解越困难
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
		// 使用密码与生成的加密盐一起结合来生成最终的hash
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next(); // 继续执行存储流程
		});
	});
});

// 为模式添加静态方法
UserSchema.statics = {
	fetch: function(cb) { // 获取全部数据
		return this
			.find({})
			.sort({'date.updateAt': -1}) // 根据更新时间排序（按时间由大到小排序，也就是最新更新的排在数组的第一位）
			.exec(cb);
	},
	findById: function(id, cb) { // 查询单条数据
		return this
			.find({_id: id})
			.exec(cb);
	}
}

// 为模式添加实例方法
UserSchema.methods = {
	comparePassword: function(_password, cb) {
		// 比对密码
		bcrypt.compare(_password, this.password, function(err, isMatch) {
			if (err) return cb(err);
			cb(null, isMatch);
		});
	}
}

module.exports = UserSchema;