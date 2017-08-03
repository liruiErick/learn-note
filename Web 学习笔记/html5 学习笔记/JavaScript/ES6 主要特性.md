# let 和 const

let 用于声明只在块作用于内有效的变量

```js
{ let a = 10; }
```

const 用于声明常量（常量不可修改，在声明后再赋值就会报错）

```js
onst PI = 3.1415;
PI // 3.1415
PI = 3; // TypeError: Assignment to constant variable.
```




# 解构赋值

```js
let [x, y, ...z] = [1, 2, 3, 4]; // x=1, y=2, z=[3, 4]

let [x, y = 'b'] = ['a']; // x='a', y='b'

[x, y] = [y, x]; // 简洁的实现变量交换

let { foo, bar } = { foo: 'aaa', bar: 'bbb' }; // foo=='aaa', bar=='bbb'

let { foo: baz } = { foo: 'aaa', bar: 'bbb' }; // baz=='aaa'

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }; // x==1, y==2, z=={ a: 3, b: 4 }

let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);
```




# 函数参数默认值

```js
function fetch(url, { method = 'GET' } = {}) {
	console.log(method);
}
```

如果参数传入 undefined，将触发该参数等于默认值，null则没有这个效果。




# 箭头函数

```js
var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

箭头函数有几个使用注意点。

（1）函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。

（3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。



# 新增运算符

#### 扩展运算符

扩展运算符`...`会将一个具有遍历器接口`Symbol.iterator`的对象转换为用逗号分隔的参数序列。

```js
// 使用扩展运算符将一个NodeList对象转化为一般数组
[...document.querySelectorAll('div')]

// 使用扩展运算符来聚合函数的参数
function add(...args) {}
var numbers = [4, 38];
add(...numbers);

// 使用扩展运算符拆解字符串
[...'hello'] // [ "h", "e", "l", "l", "o" ]
```

#### 绑定运算符

ES7提出了“函数绑定”（function bind）运算符，用来取代`call`、`apply`、`bind`调用。函数绑定运算符是并排的两个双冒号`::`，双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即`this`对象），绑定到右边的函数上面。

```js
foo::bar;
// 等同于
bar.bind(foo);

::bar;
// 等同于
bar.bind(bar);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);
```



# 模板字符串

使用反引号（`）引用的字符串可以换行，并且所有的空格和缩进都会被保留在输出之中

```js
var div = `<div>
             <p></p>
           </div>`
```

字符串中嵌入变量

```js
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```

大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性

```js
`${x} + ${y * 2} = ${x + y * 2}`
`foo ${func()} bar`
```

使用函数的“标签模板”功能，将模板字符串解析成函数的参数

```js
var a = 5, b = 10;
func`Hello ${ a + b } world ${ a * b }`;
// 等同于
func(['Hello ', ' world ', ''], 15, 50);
```




# 新增数据类型 Symbol

ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型。是一种类似于字符串的数据类型。
前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

```js
let s = Symbol();
typeof s //=> 'symbol'
```

`Symbol()` 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```js
var s1 = Symbol('foo');
var s2 = Symbol('foo');
s1 // Symbol(foo)
s1 === s2 // false
```

`Symbol.for()` 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。

```js
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
s1 === s2 // true
```

`Symbol.for()` 与 `Symbol()` 这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。

```js
Symbol.keyFor(); // 返回一个使用 Symbol.for() 方法登记的Symbol类型值的key。
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

另外，Symbol 如果作为对象的 key，则不会被遍历器枚举，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。但是，它也不是私有属性，有一个`Object.getOwnPropertySymbols`方法，可以获取指定对象的所有 Symbol 属性名。

`Object.getOwnPropertySymbols`方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

```js
var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

Object.getOwnPropertySymbols(obj); // [Symbol(a), Symbol(b)]
```

另一个新的API，`Reflect.ownKeys`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

```js
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj); //  ["enum", "nonEnum", Symbol(my_key)]
```

由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。

```js
var size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

var x = new Collection();
Collection.sizeOf(x); // 0

x.add('foo');
Collection.sizeOf(x); // 1

Object.keys(x); // ['0']
Object.getOwnPropertyNames(x); // ['0']
Object.getOwnPropertySymbols(x); // [Symbol(size)]
```

上面代码中，对象`x`的`size`属性是一个 Symbol 值，所以`Object.keys(x)`、`Object.getOwnPropertyNames(x)`都无法获取它。这就造成了一种非私有的内部方法的效果。



# Class

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过`class`关键字，可以定义类。基本上，ES6的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

```js
// ES5
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.z = 0;
Point.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
};
Point.PI = Math.PI;
Point.sub = function(x, y) {
    return x - y;
};

// ES6
class Point {
    z = 0
    static PI = Math.PI
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    static sub(x, y) {
        return x - y;
    }
}
```

#### extends

Class之间可以通过`extends`关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。子类必须在`constructor`方法中调用`super`方法，否则新建实例时会报错。这是因为子类没有自己的`this`对象，而是继承父类的`this`对象，然后对其进行加工。如果不调用`super`方法，子类就得不到`this`对象。

```js
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // super作为函数时，相当于调用父类的constructor(x, y)
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString(); // super作为对象时，可以调用父类定义的原形方法
    // 但是定义在父类实例上的方法或属性，是无法通过super调用的。
    super.x; //=> undefined
  }
  static sub(x, y, z) {
    return super.sub(x, y) - z; // super作为对象时，也可以调用父类的静态方法。
  }
}
```

#### prototype属性和\_\_proto__属性

Class作为构造函数的语法糖，同时有`prototype`属性和`__proto__`属性，因此同时存在两条继承链。

（1）子类的`__proto__`属性，表示构造函数的继承，总是指向父类。

（2）子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性。

```js
class A {}
class B extends A {}
A.__proto__ === Function.prototype // true
A.prototype.__proto__ === Object.prototype // true
B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```

这里就可以看出，每一个类或是函数其实就是以`Function.prototype`作为原形的`Function`实例，与一般对象实例不同的是，类或函数同时也具有`prototype`属性，也可以被实例化。

利用这个特性，可以获取一个子类的父类

```js
Object.getPrototypeOf(B) === A // true
```

#### new.target

ES6为`new`命令引入了一个`new.target`属性，（在构造函数中）返回`new`命令作用于的那个构造函数。如果构造函数不是通过`new`命令调用的，`new.target`会返回`undefined`，因此这个属性可以用来确定构造函数是怎么调用的。

```js
function A() {
  console.log(new.target);
}
class B {
  constructor() {
    console.log(new.target);
  }
}
A(); //=> undefined
new A(); //=> A
new B(); //=> B
```

#### 类的修饰 

修饰器（Decorator）是一个函数，用来修改类的行为。这是ES7的一个提案，目前Babel转码器已经支持。

修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。

```js
// 类修饰器有一个参数 target 代表要修饰的类
function testable(target) {
  target.isTestable = true;
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}
// 等同于
testable(MyTestableClass);

console.log(MyTestableClass.isTestable) // true
console.log((new MyTestableClass).isTestable) // true
```

如果觉得一个参数不够用，可以在修饰器外面再封装一层函数。

```js
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false
```

修饰器不仅可以修饰类，还可以修饰类的属性。

```js
// 属性或方法修饰器有3个参数，参数类似于 Object.defineProperty 的参数
// target     无论是修饰类还是修饰类属性，target永远指向类
// name       被修饰的属性名
// descriptor 该属性的描述对象
function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}
// 等同于
readonly(Person.prototype, 'name', descriptor);
// 等同于
Object.defineProperty(Person.prototype, 'name', descriptor);
```

#### 多个修饰器的执行顺序

如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。

```js
function dec(id){
    console.log('evaluated', id);
    return (target, property, descriptor) => console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
```

上面代码中，外层修饰器`@dec(1)`先进入，但是内层修饰器`@dec(2)`先执行。

#### 严格模式

类和模块的内部，默认就是严格模式，所以不需要使用`use strict`指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以ES6实际上把整个语言升级到了严格模式。



# module

ES6模块不是对象，而是通过`export`命令显式指定输出的代码，输入时也采用静态命令的形式。

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从`fs`模块加载3个方法，其他方法不加载。这种加载称为“编译时加载”，即ES6可以在编译时就完成模块加载，效率要比CommonJS模块的加载方式高。

模块功能主要由两个命令构成：`export`和`import`。

`export`命令用于规定模块的对外接口。

```js
// 正确
export var m = 1;

// 正确
var m = 1;
export {m};

// 正确
var n = 1;
// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
export {n as m};

// 正确
export function f() {};

// 正确
function f() {}
export {f};

// 报错
export 1;

// 报错
var m = 1;
export m;

// 报错
function f() {}
export f;
```

`import`命令用于加载执行其他模块并输入提供的功能。

```js
// 加载 test.js，从中导出 a、b、c三个变量
import {a, b, c} from './test';

// 使用as关键字，将输入的变量重命名。
import {a as A, b as B, c as C} from './test';

// 将模块所有输出对象都加载到 x 对象上
import * as x from './test';

// 仅仅执行loader模块，但是不输入任何值。
import './loader';
```

如果在一个模块之中，先引入后输出同一个模块，`import`语句可以与`export`语句写在一起。

```js
export { es6 } from './someModule';
// 等同于
import { es6 } from './someModule';
export { es6 };

// 输出someModule模块的所有属性和方法。
export * from './someModule';
```

#### default命令

下面代码的两组写法，第一组是使用`export default`时，对应的`import`语句不需要使用大括号；第二组是不使用`export default`时，对应的`import`语句需要使用大括号。

```js
// test.js 一般输出
export function addListener() {};
// 引入时必须使用大括号，且函数名必须与原函数名相同
import {addListener} from 'test';

// test.js 默认输出
export default function addListener() {};
// 引入时函数名可以自定义
import addListener from 'test';
```

本质上，`export default`就是输出一个叫做`default`的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

```js
// 输出
addListener() {};
export { addListener as default };
// 引入
import { default as on } from 'modules';
```

如果想在一条import语句中，同时输入默认方法和其他变量，可以写成下面这样。

```js
import customName, { otherMethod } from './export-default';
```

#### ES6 模块与 CommonJS 模块的差异

它们有两个重大差异：

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。



# Proxy 和 Reflect

`proxy` 用于修改一个对象的一些默认行为，类似于在原生行为上添加一层拦截。

`reflect` 用于调用对象的原生行为，也就是说不管`Proxy`怎么修改默认行为，你总可以在`Reflect`上获取修改前的默认行为

```js
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
```



# Set 和 Map 数据结构

#### Set

Set 是一个不重复值的集合

```js
var set = new Set([1, 2, 3, 4, 4]);
[...set] // [1, 2, 3, 4]

// 去除数组的重复成员
var array = [1, 2, 3, 4, 4];
[...new Set(array)] // [1, 2, 3, 4]
```

Set结构的实例有以下属性和方法。 

- `Set.prototype.size`：返回`Set`实例的成员总数。


- `add(value)`：添加某个值，返回`Set`结构本身。
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `clear()`：清除所有成员，没有返回值。


#### WeakSet

`WeakSet` 结构与 `Set` 类似，也是不重复的值的集合。但是，它与 `Set` 有两个区别。

- 成员只能是对象，而不能是其他类型的值。
- 成员对象都是弱引用，即垃圾回收机制不考虑 `WeakSet` 对该对象的引用。

因此，WeakSet不能遍历，是因为成员都是弱引用，随时可能消失。

#### Map

它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

作为构造函数，`Map` 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。

```js
var map = new Map([
  [{}, 1],
  [true, 2]
]); // Map {Object {} => 1, true => 2}

// 转为数组
[...map] // [ [ {}, 1 ], [ true, 2 ] ]
```

Map结构的实例有以下属性和方法。

- `Map.prototype.size`：返回`Map`实例的成员总数。
- `set(key, value)`：设置`key`所对应的键值，然后返回整个`Map`结构。如果`key`已经有值，则键值会被更新。
- `get(key)`：读取`key`对应的键值，如果找不到`key`，返回`undefined`。
- `delete(key)`：删除某个键，返回一个布尔值，表示删除是否成功。
- `has(key)`：返回一个布尔值，表示该键是否在`Map`数据结构中。
- `clear()`：清除所有成员，没有返回值。

#### WeakMap

`WeakMap` 结构与 `Map` 结构基本类似，唯一的区别是它只接受对象作为键名（`null` 除外），不接受其他类型的值作为键名，与 `WeakSet` 相同，键名所指向的对象也是弱引用，即同样不能遍历。



# for...of

`for...of` 循环本质上就是调用iterator接口产生的遍历器进行遍历。因此没有部署iterator的对象不能被它遍历。

```js
const arr = ['red', 'green', 'blue'];
let iterator  = arr[Symbol.iterator]();

for(let v of arr) {
  console.log(v); // red green blue
}

for(let v of iterator) {
  console.log(v); // red green blue
}
```

对于数组，`for...in`循环读取键名，`for...of`循环读取键值。

```js
let arr = [3, 5, 7];
arr.foo = 'hello';
// for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键
for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo"
}
// for...of只遍历数组成员
for (let i of arr) {
  console.log(i); //  "3", "5", "7"
}
```

对于普通的对象，`for...of`结构不能直接使用，会报错，必须部署了iterator接口后才能使用。

```js
var es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for (var i of es6) {
  console.log(i);
}
// TypeError: es6 is not iterable
```

使用`for...of`遍历`Map`时，返回的是一个数组，该数组的两个成员分别为当前`Map`成员的键名和键值。

```js
var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262
```



# Generator函数

Generator函数是一个普通函数，但是有两个特征。

- `function`关键字与函数名之间有一个星号。
- 函数体内部使用`yield`语句，定义不同的内部状态。

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
```

调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是一个遍历器对象（Iterator Object）。

下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用`next`方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个`yield`语句（或`return`语句）为止。换言之，Generator函数是分段执行的，`yield`语句是暂停执行的标记，而`next`方法可以恢复执行。

```js
hw.next() // { value: 'hello', done: false }
hw.next() // { value: 'world', done: false }
hw.next() // { value: 'ending', done: true }
hw.next() // { value: undefined, done: true }
```

总结一下，调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。以后，每次调用遍历器对象的`next`方法，就会返回一个有着`value`和`done`两个属性的对象。`value`属性表示当前的内部状态的值，是`yield`语句后面那个表达式的值；`done`属性是一个布尔值，表示是否遍历结束。

`yield`句本身没有返回值，或者说总是返回`undefined`。`next`方法可以带一个参数，该参数就会被当作上一个`yield`语句的返回值。

```js
function* foo(x) {
  var y = yield (x + 1);
  var z = 2 * (yield y);
  return z;
}

var b = foo(5);
b.next(); // { value:6, done:false }
b.next(12); // { value:12, done:false }
b.next(13); // { value:26, done:true }
```

注意，由于`next`方法的参数表示上一个`yield`语句的返回值，所以第一次使用`next`方法时，不能带有参数。V8引擎直接忽略第一次使用`next`方法时的参数，只有从第二次使用`next`方法开始，参数才是有效的。从语义上讲，第一个`next`方法用来启动遍历器对象，所以不用带有参数。

`for...of`循环可以自动遍历Generator函数时生成的`Iterator`对象，且此时不再需要调用`next`方法。

```js
function *foo() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3
```

这里需要注意，一旦`next`方法的返回对象的`done`属性为`true`，`for...of`循环就会中止，且不包含该返回对象，所以上面代码的`return`语句返回的4，不包括在`for...of`循环之中。

原生的JavaScript对象没有遍历接口，无法使用`for...of`循环，通过Generator函数为它加上这个接口，就可以用了。

```js
function* objectEntries() {
  let propKeys = Object.keys(this);
  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let obj = { a: 1, b: 2, c: 3 };
obj[Symbol.iterator] = objectEntries;

for (let [key, value] of obj) {
  console.log(`${key}: ${value}`);
}
```

#### Generator.prototype.return() 

Generator函数返回的遍历器对象，有一个`return`方法，可以返回给定的值，并且终结遍历Generator函数。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();
g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
```

#### Generator.prototype.throw()

Generator函数返回的遍历器对象，有一个`throw`方法，可以在函数体外抛出错误，然后在Generator函数体内捕获。

 `throw`方法可以接受一个参数，该参数会被`catch`语句接收，建议抛出`Error`对象的实例。

```js
var g = function* () {
  try {
    yield console.log(1);
  } catch (e) {
    console.log(e);
  }
  yield console.log(2);
};

var i = g();
i.next();
// 1
i.throw(new Error('出错了！'));
// Error: 出错了！(…)
// 2
```

上面的例子可以看出，`throw`方法执行以后，相当于又执行了一次`next`方法。此时，如果Generator函数内部没有捕获这个错误，那么函数将会停止执行。如果此后还调用`next`方法，将返回一个`value`属性等于`undefined`、`done`属性等于`true`的对象，即JavaScript引擎认为这个Generator已经运行结束了。



# Promise对象

ES6规定，Promise对象是一个构造函数，用来生成Promise实例。

```js
function getJSON(url) {
  // new Promise 中的方法是同步执行的，也就是说会立即执行
  return new Promise(function(resolve, reject) {
    $.getJSON(url, (json) => resolve(image))
      .fail((jqXHR, status) => reject(new Error(status)));
  });
}
// then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。
getJSON("ajax/test.json")
  .then(function(json) {
    console.log(json);
  }, function(error) {
    throw error;
  });
```

#### Promise.prototype.then()

`then`方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即`then`方法后面再调用另一个`then`方法。

```js
getJSON("ajax/test.json")
  .then(function(json) {
    return json.data;
  }).then(function(data) {
    // 这里几乎是在第一个 then return 后立即执行的
  });
```

采用链式的`then`，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。

```js
getJSON("ajax/test.json")
  .then(function(json1) {
    return getJSON("ajax/test2.json");
  }).then(function(json2) {
    // 等待 test2.json 加载完成后执行
  });
```

#### Promise.prototype.catch()

`catch`方法是`.then(null, rejection)`的别名，用于指定发生错误时的回调函数。如果异步操作抛出错误，状态就会变为`Rejected`，就会调用`catch`方法指定的回调函数，处理这个错误。另外，`then`方法指定的回调函数，如果运行中抛出错误，也会被`catch`方法捕获。

```js
getJSON("ajax/test.json")
  .then((img) => console.log("resolved:", img));
  .catch((err) => console.log("rejected:", err));
```

一般来说，不要在`then`方法里面定义Reject状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。理由是`catch`写法可以捕获前面`then`方法执行中的错误，也更接近同步的写法（`try/catch`）。

注意，在`catch`链中，如果第一个`catch`没有返回信息，那么后续的`catch`将什么都捕获不到，也就是说这些`catch`的回调将不会执行。

#### Promise.all() 

`Promise.all`方法用于将多个Promise实例，包装成一个新的Promise实例。下面代码中，`Promise.all`方法接受一个数组作为参数，`p1`、`p2`、`p3`都是Promise对象的实例，如果不是，就会先调用`Promise.resolve`方法，将参数转为Promise实例，再进一步处理。（`Promise.all`方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例）

```js
var p = Promise.all([p1, p2, p3]);
p.then(function([p1Val, p2Val, p3Val]) {
  // ...
});
```

`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。

（1）只有`p1`、`p2`、`p3`的状态都变成`resolved`，`p`的状态才会变成`resolved`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

#### Promise.race() 

`Promise.race`方法同样是将多个Promise实例，包装成一个新的Promise实例。与`Promise.all`方法不同的是，只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给`p`的回调函数。

#### Promise.resolve() 

`Promise.resolve`方法的作用是，将一个现有对象转为Promise对象。

```js
Promise.resolve('foo');
// 等价于
new Promise(resolve => resolve('foo'));
```

`Promise.resolve`方法的参数分成四种情况。

**（1）参数是一个Promise实例**

如果参数是Promise实例，那么`Promise.resolve`将不做任何修改、原封不动地返回这个实例。

**（2）参数是一个thenable对象**

`thenable`对象指的是具有`then`方法的对象，`Promise.resolve`方法会将这个对象转为Promise对象，然后就立即执行`thenable`对象的`then`方法。

**（3）参数不是具有then方法的对象，或根本就不是对象**

如果参数是一个原始值，或者是一个不具有`then`方法的对象，则`Promise.resolve`方法返回一个新的Promise对象，状态为`Resolved`。

**（4）不带有任何参数**

`Promise.resolve`方法允许调用时不带参数，直接返回一个`Resolved`状态的Promise对象。

需要注意的是，立即`resolve`的Promise对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。

```js
setTimeout(() => console.log('three')); // 在下一轮“事件循环”开始时执行
Promise.resolve().then(() => console.log('two')); // 在本轮“事件循环”的结束时执行
console.log('one'); // 立即执行
// one
// two
// three
```

#### Promise.reject() 

`Promise.reject(reason)`方法也会返回一个新的Promise实例，该实例的状态为`rejected`。它的参数用法与`Promise.resolve`方法完全一致。



# async函数

async 函数是什么？一句话，它就是 Generator 函数的语法糖。

前文有一个 Generator 函数，依次读取两个文件。

```js
var fs = require('fs');

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* () {
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

写成`async`函数，就是下面这样。

```js
var asyncReadFile = async function () {
  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

一比较就会发现，`async`函数就是将 Generator 函数的星号（`*`）替换成`async`，将`yield`替换成`await`，仅此而已。

Generator 函数的执行必须靠执行器，所以才有了`co`模块，而`async`函数自带执行器。也就是说，`async`函数的执行，与普通函数一模一样，只要一行。

```js
asyncReadFile();
```

上面的代码调用了`asyncReadFile`函数，首先它会立即返回一个`Promise`对象，当函数代码都执行完毕后，它才会变为`resolve`状态。

#### await 命令

`await`命令后面是一个`Promise`对象，但是`await`返回的是`Promise`对象`resolve`方法的传值。

```js
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 3000);
    });
};

async function onLoad() {
    let data = await getData();
    console.log(data); // => 123
}
```

如果`await`命令后面不是一个`Promise`对象，那么`await`会返回原值，但是`async`函数返回的是一个立即`resolve`的`Promise`对象，并将`await`的返回值作为参数传入。

```js
async function f() {
  return await 123;
}

f().then(v => console.log(v))
// 123
```

#### 使用注意点

第一点，`await`命令后面的`Promise`对象，如果运行结果是`rejected`，且没有被捕获，那么`async`函数执行会被挂起，函数中后面的代码将会停止执行，所以`rejected`必须被捕获。

```js
// 可以把await命令放在try...catch代码块中
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 也可以提前写好错误处理
async function myFunction() {
  await somethingThatReturnsAPromise().catch(function (err) {
    console.log(err);
  };
}
```

第二点，多个`await`命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

```js
let foo = await getFoo();
let bar = await getBar();
```

上面代码中，`getFoo`和`getBar`是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有`getFoo`完成以后，才会执行`getBar`，完全可以让它们同时触发。

```js
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```

上面两种写法，`getFoo`和`getBar`都是同时触发，这样就会缩短程序的执行时间。



# 对象扩展

对字符串、正则表达式、数组、函数、对象进行了扩展，添加了若干类方法和实例方法。

