// 包装函数
module.exports = function(grunt) {

	// 任务配置,所有插件的配置信息
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				// 定义一个字符串将连接每个输出的文件
				separator: ';'
			},
			dist: {
				// 要连接的文件
				src: ['src-js/**/*.js'],
				// 由此产生的JS文件的位置
				dest: 'js/<%= pkg.name %>.js'
			}
		},

		// uglify插件的配置信息
		uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		// imagemin插件的配置信息
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src-img', // 图片源目录
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/' // 图片输出录
				}]
			}
		}

		// watch插件的配置信息
		// watch: {
		// 	scripts: {
		// 		files: ['src-js/*.js'],
		// 		tasks: ['uglify'],
		// 		options: {
		// 			spawn: false
		// 		}
		// 	},
		// 	images: {
		// 		files: ['src-img/**/*.{png,jpg,gif}'],
		// 		tasks: ['imagemin'],
		// 		options: {
		// 			spawn: false
		// 		}
		// 	}
		// }
	});

	// 告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	//grunt.loadNpmTasks('grunt-contrib-watch');

	// 告诉grunt当我们在终端中输入grunt时需要做些什么
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};