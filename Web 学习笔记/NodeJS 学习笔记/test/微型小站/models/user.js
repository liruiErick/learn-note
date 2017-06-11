var Mongoose = require('mongoose');
var UserSchema = require('../schemas/user'); // 引入编写好的模式
var User = Mongoose.model('User', UserSchema); // 通过模式编译生成 User 模型

module.exports = User;