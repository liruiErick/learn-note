/**
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */

(function(holder) {
    'use strict';

    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
    holder.Class = function() {};
    holder.Class.extend = function(prop) {
        var _super = this.prototype;

        initializing = true;
        var prototype = new this();
        initializing = false;

        for (var name in prop) {
            prototype[name] = typeof prop[name] === 'function' &&
                typeof _super[name] === 'function' && fnTest.test(prop[name]) ?
                (function(name, fn){
                    return function() {
                        var tmp = this._super;
                        this._super = _super[name];
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;
                        return ret;
                    };
                })(name, prop[name]) :
            prop[name];
        }

        function Class() {
            if ( !initializing && this.init ) this.init.apply(this, arguments);
        }
        Class.prototype = prototype;
        Class.prototype.constructor = Class;
        Class.extend = this.extend;

        return Class;
    };

})(window.bjj || window);





// 代码详解
(function(holder) { // holder 为基类的持有者
'use strict';
// initializing变量用来标示当前是否处于类的创建阶段
// - 在类的创建阶段是不能调用原型方法init的，init应该在真正创建实例时才被调用。
var initializing = false,

// fnTest是一个正则表达式，可能的取值为（/\b_super\b/ 或 /.*/）
// - 对 /xyz/.test(function() { xyz; }) 的测试是为了检测浏览器是否支持test参数为函数的情况
// - 不过我对IE7.0,Chrome2.0,FF3.5进行了测试，此测试都返回true。
// - 所以我想这样对fnTest赋值大部分情况下也是对的：fnTest = /\b_super\b/;
    fnTest = /xyz/.test(function() {  xyz; }) ? /\b_super\b/ : /.*/;

// 基类构造函数
// - 这里的this是window，所以这整段代码就向外界开辟了一扇窗户 - window.Class
// - 也可以将Class定义在一个给定的命名空间下，比如：bjj.Class
holder.Class = function() {};

// 继承方法定义
holder.Class.extend = function(prop) {

    // this具体指向什么不是定义时能决定的，而是要看此函数是怎么被调用的
    // - 我们已经知道extend肯定是作为方法调用的，而不是作为构造函数
    // - 所以这里this指向的不是Object，而是Function（即是Class），那么this.prototype就是父类的原型对象
    // - 注意：_super指向父类的原型对象，我们会在后面的代码中多次碰见这个变量
    var _super = this.prototype;

    initializing = true;
    // 通过将子类的原型指向父类的一个实例对象来完成继承
    // - 注意：this是基类构造函数（即是Class）
    var prototype = new this();
    initializing = false;

    // 遍历子类中定义的所有属性和方法
    for (var name in prop) {
        // 如果父类和子类有同名方法，并且通过正则表达式检查出子类方法中包含“_super”的调用，则重新定义子类的方法
        prototype[name] = typeof prop[name] === 'function' &&
            typeof _super[name] === 'function' && fnTest.test(prop[name]) ?
            (function(name, fn) {
                return function() { // 这个方法中的 this 表示子类的实例
                    // 如果这个子类中定义了 _super，那么先将其保存到一个临时变量中
                    var tmp = this._super;
                    // 将父类的同名方法赋予 this._super
                    this._super = _super[name];
                    // 执行子类的同名方法，同时也就执行了 this._super，并将返回值保存至 ret
                    var ret = fn.apply(this, arguments);
                    // 恢复子类中定义的 _super
                    this._super = tmp;
                    // 返回子类的同名方法的返回值
                    return ret;
                };
            })(name, prop[name]) :
            prop[name]; // 否则直接返回原值
    }
    // 原型对象准备好后，就开始创建一个新的对象
    // - 注意：这里的Class不是在最外层定义的那个基类构造函数
    function Class() {
        // 如果原型对象已经初始化完成，且定义了init方法，则调用原型方法init
        if (!initializing && this.init)
            this.init.apply(this, arguments);
    }
    // 子类的prototype指向父类的实例（完成继承的关键）
    Class.prototype = prototype;
    // 修正constructor指向错误
    Class.constructor = Class;
    // 子类自动获取extend方法，arguments.callee指向当前正在执行的函数
    // Class.extend = arguments.callee;
    // 严格模式下，使用 this.extend 代替 arguments.callee
    Class.extend = this.extend;
    return Class;
};

})(window.bjj || window);