var Mongoose = require('mongoose');
var MoviesSchema = require('../schemas/movie'); // 引入编写好的模式
var Movie = Mongoose.model('Movie', MoviesSchema); // 通过模式编译生成 Movie 模型

module.exports = Movie;