// 命令行中，打开到 r.js 文件的目录，然后执行 node r.js -o build.js
({
    // app顶级目录，非必选项。如果指定值，baseUrl则会以此为相对路径
    appDir: "some/path/",

    // 模块根目录。默认情况下所有模块资源都相对此目录。
    // 若该值未指定，模块则相对build文件所在目录。
    // 若appDir值已指定，模块根目录baseUrl则相对appDir。
    baseUrl: "./",

    // 配置文件目录
    mainConfigFile: '../some/path/to/main.js',

    // 设置模块别名
    // RequireJS 2.0 中可以配置数组，顺序映射，当前面模块资源未成功加载时可顺序加载后续资源
    paths: {
        "foo.bar": "../scripts/foo/bar",
        "baz": "../another/path/baz"
    },

    // 如果 shim 配置在 requirejs 运行过程中被使用的话，需要在这里重复声明，这样才能将依赖模块正确引入。
    // 最好是使用 mainConfigFile 指定配置文件，这样就可以只在一个地方声明。
    // 当然，如果 mainConfigFile 没有声明，shim 配置就必须声明。
    shim: {},

    // 在 2.1.11 版本中，shim 的依赖可以包含在 define() 里。具体参见：http://requirejs.org/docs/api.html#config-shim
    wrapShim: false,

    // 建立一个模块到其它模块的ID地图
    map: {},

    // 配置 CommonJS 的 package See http://requirejs.org/docs/api.html#packages for more information.
    packagePaths: [],
    packages: [],

    // 指定输出目录，若值未指定，则相对 build 文件所在目录
    dir: "../some/path",

    // 在 RequireJS 2.0.2 版本中，dir 指向的目录在生成开始之前会被删除。
    // 如果你有一个大型的生成项目并且不会通过 onBuildRead / onBuildWrite 改变源文件，你可以使用这个参数来保持原目录，
    // 值为 true 时，这样可以让重新生成时更快速，
    // 但是如果生成的代码被某种方式改变的话，可能会导致未知的错误。
    keepBuildDir: true,

    // 国际化配置
    locale: "en-us",

    // JS 文件优化方式，目前支持以下几种：
    //   uglify: （默认） 使用 UglifyJS 来压缩代码
    //   uglify2: 使用 UglifyJS2 来压缩代码，支持 SourceMap
    //   closure: 使用 Google's Closure Compiler 的简单优化模式
    //   closure.keepLines: 使用 closure，但保持换行
    //   none: 不压缩代码
    optimize: "uglify2",

    // 2.1.2 中提到，如果使用 dir 作为输出目录，优化器会优化输出目录的所有JS（包括没有在 modules 配置中声明的）。
    // 当然，如果没有在 modules 里面声明的JS文件在生成过后不会被使用你可以跳过这些文件，以加快生成速度。
    // 将该参数设置为 true 来跳过这些不用被生成的JS文件。
    skipDirOptimize: false,

    // 2.1.11 中：如果 dir 被声明且不为 "none"，并且 skipDirOptimize 为 false，通常所有的JS文件都会被压缩，这个值自动设置为 "all"。
    // 为了让JS文件能够在压缩过正确执行，优化器会加一层define()调用并且会插入一个依赖数组。
    // 当然，这样会有一点点慢如果有很多文件或者有大文件的时候。
    // 所以，设置该参数为 "skip" 这个过程就不会执行，如果 optimize 设置为 "none" 也一样。
    // 如果你想手动设置值的话：
    // 1）优化后：如果你打算压缩没在 modules 声明的JS文件，在优化器执行过后，你应该设置这个值为 "all"
    // 2）优化中：但在动态加载过后，你想做一个会文件优化，但不打算在动态加载这些文件可以设置成 "skip"
    // 最后：所有生成的文件（无论在不在 modules 里声明过）自动标准化
    normalizeDirDefines: "skip",

    // 使用 UglifyJS 时的可配置参数
    // See https://github.com/mishoo/UglifyJS for the possible values.
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000,
        defines: {
            DEBUG: ["name", "false"]
        },
        no_mangle: true
    },

    // 使用 UglifyJS2 时的可配置参数
    Uglify2: {
        output: {
            beautify: true
        },
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: true,
        mangle: false
    },

    // 使用 Closure Compiler 时的可配置参数
    closure: {
        CompilerOptions: {},
        CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
        loggingLevel: 'WARNING'
    },

    // CSS 优化方式，目前支持以下几种：
    // none: 不压缩，仅合并
    // standard: 标准压缩，移除注释、换行，以及可能导致 IE 解析出错的代码
    // standard.keepLines: 除标准压缩外，保留换行
    // standard.keepComments: 除标准压缩外，保留注释 (r.js 1.0.8+)
    // standard.keepComments.keepLines: 除标准压缩外，保留注释和换行 (r.js 1.0.8+)
    optimizeCss: "standard.keepLines",

    // 是否忽略 CSS 资源文件中的 @import 指令
    cssImportIgnore: null,

    // 一般用于命令行，可将多个 CSS 资源文件打包成单个 CSS 文件
    cssIn: "path/to/main.css",
    out: "path/to/css-optimized.css",

    // 如果 "out" 和 "cssIn" 不是同一目录，并且在 cssIn 文件里面有 url() 相对目录的，用这个去设置URL前置。
    // 仅仅在优化后 URL 不正确的情况下使用。
    cssPrefix: "",

    // 处理所有的文本资源依赖项，从而避免为加载资源而产生的大量单独xhr请求
    inlineText: true,

    // 是否生成 SourceMap
    // 如果要生成 SourceMap，preserveLicenseComments 必须为 false。
    generateSourceMaps: false,

    // 默认保留模块的 license 注释
    preserveLicenseComments: true,

    // 是否开启严格模式
    // 由于很多浏览器不支持 ES5 的严格模式，故此配置默认值为 false
    useStrict: false,

    // 指定生成编译指示。如果源文件包含类似如下注释：
    // >>excludeStart("fooExlude", pragmas.fooExclude);
    // >>excludeEnd("fooExclude");
    // 那么以 //>> 开头的注释就是编译指示。
    // excludeStart / excludeEnd 和 includeStart / includeEnd 起作用，
    // 在 includeStart 或 excludeStart 中的编译指示值将参与计算来判断 Start 和 End 之前的编译指示是 include 还是 exclude。
    // 如果你可以选择用 "has" 或编译指示，建议用 "has" 代替。 编译指示比较难于阅读，但是它在对代码移除上比较灵活。
    // 基于 "has" 的代码必须遵守 JavaScript 规则。编译指示还可以在未压缩的代码中删除代码，而 "has" 只能通过 UglifyJS 或者 Closure。 Compiler来做。
    pragmas: {
        fooExclude: true
    },

    // 和 "pragmas" 一样，但只能在文件保存的优化阶段应用一次。
    // "pragmas" 可以同时在依赖映射和文件保存优化阶段应用。
    // 有些 "pragmas" 可能不会在依赖映射时被执行，
    // 例如在 CoffeeScript 的 loader 插件中，只想 CoffeeScript 做依赖映射，
    // 但是一旦这个文件被保存为一个 javascript 文件，CoffeeScript compiler 就没用了。
    // 那样的话，pragmasOnSave 就会用于在保存期排除编译代码。
    pragmasOnSave: {
        //Just an example
        excludeCoffeeScript: true
    },

    // 使用 "has" 允许 trimming 代码树。
    // 基于js的特征检测：https://github.com/phiggins42/has.js。
    // 代码树修饰仅仅在使用 UglifyJS 或 Closure Compiler 压缩时发生。
    // 更多请见：http://requirejs.org/docs/optimization.html#hasjs
    has: {
        'function-bind': true,
        'string-trim': false
    },

    // 和 pragmasOnSave 类似
    // Similar to pragmasOnSave, but for has tests -- only applied during the
    // file save phase of optimization, where "has" is applied to both
    // dependency mapping and file save phases.
    hasOnSave: {
        'function-bind': true,
        'string-trim': false
    },

    // 允许 requirejs 名称空间，使 require 和 define 换作新的名字。
    // 完整实例可以参考 http://requirejs.org/docs/faq-advanced.html#rename
    namespace: 'foo',

    // 是否跳过 pragmas 处理
    skipPragmas: false,

    // 如果是 false，文件就不会用 define() 来定义模块而是用一个 define() 占位符插入其中。
    // 另外，require.pause / resume 调用也会被插入。设置为 "true" 来避免。
    // 这个参数用在你不是用 require() 来创建项目或者写js文件，但是又想使用 RquireJS 的优化工具来合并模块是非常有用的。
    skipModuleInsertion: false,

    // 将模块排除在优化文件之外。
    // Specify modules to stub out in the optimized file. The optimizer will
    // use the source version of these modules for dependency tracing and for
    // plugin use, but when writing the text into an optimized layer, these
    // modules will get the following text instead:
    // If the module is used as a plugin:
    //     define({load: function(id){throw new Error("Dynamic load not allowed: " + id);}});
    // If just a plain module:
    //     define({});
    // This is useful particularly for plugins that inline all their resources
    // and use the default module resolution behavior (do *not* implement the
    // normalize() method). In those cases, an AMD loader just needs to know
    // that the module has a definition. These small stubs can be used instead of
    // including the full source for a plugin.
    stubModules: ['text', 'bar'],

    // 如果不是一个文件的优化，描述输出目录的所有.js文件的插件依赖，如果这个插件支持优化成为一个单独的文件，就优化它。
    // 可能是一个比较慢的优化过程。仅仅在有些插件用了像 XMLHttpRequest 不支持跨域，并且生成的代码会被放在另一个域名。
    optimizeAllPluginResources: false,

    // 处理级联依赖，默认为 false，此时能够在运行时动态 require 级联的模块。为 true 时，级联模块会被一同打包
    findNestedDependencies: false,

    // 如果为true，将从输出目录中删除已合并的文件
    removeCombined: false,

    modules: [
        {
            // 模块 alias 名称
            name: "foo/bar/bop",

            //For build profiles that contain more than one modules entry,
            //allow overrides for the properties that set for the whole build,
            //for example a different set of pragmas for this module.
            //The override's value is an object that can
            //contain any of the other build options in this file.
            //
            override: {
                pragmas: {
                    fooExclude: true
                }
            }
        },

        // 将 alias 别名为 foo/bar/bop 和 foo/bar/bee 的模块打包成一个文件
        {
            name: "foo/bar/bop",
            include: ["foo/bar/bee"]
        },

        // 将 foo/bar/bip 及其依赖项一并打包，但不包括 foo/bar/bop
        {
            name: "foo/bar/bip",
            exclude: [
                "foo/bar/bop"
            ]
        },

        // 排除指定模块，但若该模块对所打包文件有级联依赖关系，则仍会被打包进去
        {
            name: "foo/bar/bin",
            excludeShallow: [
                "foo/bar/bot"
            ]
        },

        // insertRequire 在 RequireJS 2.0 中被引入，在 built 文件的末尾插入 require([]) 以触发模块加载并运行
        // insertRequire: ["foo/baz"] 即 require(["foo/baz"])
        // 详情见 https://github.com/jrburke/almond
        {
            name: "foo/baz",
            insertRequire: ["foo/baz"]
        }
    ],

    // 仅优化单个模块及其依赖项
    name: "foo/bar/bop",
    include: ["foo/bar/bee"],
    insertRequire: ['foo/bar/bop'],
    out: "path/to/optimized-file.js",

    // "include" 的替换方案。一般用 requirejs.config() 来定义并用 mainConfigFile 引入。
    deps: ["foo/bar/bee"],

    // RequireJS 2.0 中，"out"可以是一个函数，对单个JS文件优化可以调用 requirejs.optimize()，
    // 用 out 函数表示优化过后的内容不会被写到磁盘，而是传递给 out 函数。
    out: function (text) {
        // 自定义优化内容
    },

    // 在 2.0.12+， 设置 "out" 为 "stdout"，优化输出会写到 STDOUT，这对于 r.js 整合其它命令行工具很有用。
    // 为了避免额外的输出 "logLevel: 4" 应该被使用。
    out: "stdout",

    // wrap 任何东西在 start 和 end 之间，用于 define / require 不是全局的情况下，在end里可以暴露全局对象在文件中。
    wrap: {
        start: "(function() {",
        end: "}());"
    },

    // 另一种模块包裹方式
    // (function() { + content + }());
    wrap: true,

    // 另一种模块包裹方式，包裹内容可以是指定文件
    wrap: {
        startFile: "part/start.frag",
        endFile: "parts/end.frag"
    },

    // 跳过任何以.开头的目录和文件，比如 .files, .htaccess 等
    fileExclusionRegExp: /^\./,

    // 设置 logging level
    // TRACE: 0,
    // INFO: 1,
    // WARN: 2,
    // ERROR: 3,
    // SILENT: 4
    // Default is 0.
    logLevel: 0,

    // 在2.1.3，有些情况下当错误发生时不会抛出异常并停止优化，你可能想让优化器在某些错误发生时停止，就可以使用这个参数。
    throwWhen: {
        optimize: true
    },

    // 在每个文件模块被读取时的操作函数，可在函数体内作适当变换
    onBuildRead: function (moduleName, path, contents) {
        return contents.replace(/foo/g, 'bar');
    },

    // 在每个文件模块被写入时的操作函数
    onBuildWrite: function (moduleName, path, contents) {
        return contents.replace(/bar/g, 'foo');
    },

    // 每个JS模块集完成后执行。模块集是指一个 modules 数组项。
    onModuleBundleComplete: function(data) {},

    // 在 2.1.3 中，rawText 是模块ID的列表。这些文本内容用于代替模块的文件IO调用。
    // 用于模块ID是基于用户动态输入的情况，在网页生成工具中常用。
    rawText: {
        "some/id": "define(['another/id'], function() {})";
    },

    // 在 2.0.2 中。如果为true, 优化器会添加 define(require, exports, module) {})；包裹每一个没有调用 define() 的文件。
    cjsTranslate: true,

    // 每一个模块集最后都会添加一段 //# sourceUrl 的注释。
    // （在压缩 angular 模块时，该属性为 ture 可以防止出错）
    // Introduced in 2.0.2: a bit experimental.
    // Each script in the build layer will be turned into
    // a JavaScript string with a //@ sourceURL comment, and then wrapped in an
    // eval call. This allows some browsers to see each evaled script as a
    // separate script in the script debugger even though they are all combined
    // in the same file. Some important limitations:
    // 1) Do not use in IE if conditional comments are turned on, it will cause
    // errors:
    // http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript
    // 2) It is only useful in optimize: 'none' scenarios. The goal is to allow
    // easier built layer debugging, which goes against minification desires.
    useSourceUrl: true,

    // 定义模块的加载时间。
    waitSeconds: 7,

    // 在 2.1.9，通常 r.js 插入一个分号在文件末尾，如果没有的话。
    skipSemiColonInsertion: false,

    // 在 2.1.10，如果是true，就不会删除 amdefine，详情见：https://github.com/jrburke/amdefine
    keepAmdefine: false,

    // 在 2.1.11 中， 作为修复BUG的一部分 https://github.com/jrburke/r.js/issues/444。
    // 设置为 true 就允许源代码进行重写覆盖。当然，为了安全起见，请正确配置，比如你可能想设置 "keepBuildDir" 为 true。
    allowSourceOverwrites: false
})