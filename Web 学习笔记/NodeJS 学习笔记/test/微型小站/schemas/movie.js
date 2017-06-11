var Mongoose = require('mongoose');

// 创建一个数据模式。（类似于MySQL中创建一个表结构）
var MoviesSchema = new Mongoose.Schema({
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: String,
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
MoviesSchema.pre('save', function(next) {
	// 这里this指该条数据
	this.date.updateAt = Date.now();
	if (this.isNew) { // 判断数据是否为新创建的
		this.date.createAt = this.date.updateAt;
	}
	next(); // 继续执行存储流程
});

// 为模式添加静态方法
MoviesSchema.statics = {
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

module.exports = MoviesSchema;