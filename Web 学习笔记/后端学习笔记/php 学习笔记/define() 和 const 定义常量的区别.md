## define() 和 const 定义常量的区别

在 PHP 中可以通过 `define()` 和 `const` 两种方式定义常量
可是在开发中我们应该什么时候用 `define()` 定义常量，什么时候用 `const` 定义常量？ 这两种方式定义常量的主要区别是什么？

从 5.3 版本开始 PHP 有两种方法来定义常量，使用 `const` 关键字或者是使用 `define()` 方法：

```php
const FOO = 'BAR';
define('FOO', 'BAR');
```

两者之间最大的区别在于 `const` 是在编译时定义常量，而 `define()` 方法是在运行时定义常量。

`const` 不能用在 if 语句中，`defne()` 能用在 if 语句中。

```php
if(...) {
    const FOO = 'BAR'; // 错误
}
if(...) {
    define('FOO', 'BAR'); // 正确
}
```

`define()` 的一个常用场景是先判断常量是否已经定义再定义常量:

```php
if(defined('FOO)) {
    define('FOO', 'BAR')
}
```

`const` 定义常量时，值只能是静态标量（数字，字符串，true，false，null), 而 `define()`方法可以把任意表达式的值用作常量的值。从 PHP5.6 开始 `const` 也允许把表达式用作常量的值了。

```php
const BIT_5 = 1 << 5; // PHP5.6 后支持，之前的 PHP 版本不支持
define('BIT_5', 1 << 5); // 所有 PHP 版本都支持
```

`const` 只允许简单的常量名，而 `define()` 可以把任何表达式的值用作常量名

```php
for ($i = 0; $i < 32; $i++) {
    define('BIT_' . $i, 1 << $i);
}
```

`const` 定义的常量常量名是大小写敏感的，而传递 `true` 给 `define()`方法的第三个参数时可以定义大小写不敏感的常量。

```php
define('FOO', 'BAR', true);
echo FOO; //BAR
echo foo; //BAR
```

上面列举的都是 `const` 相较 `define()` 而言的一些缺点或者不灵活的地方，下面看一下什么情况下推荐用 `const` 而不是 `define()` 来定义常量(除非要在上述列举的场景中定义常量)。

`const` 具有更好的可读性，`const` 是语言结构而不是函数，而且与在类中定义类常量的形式保持一致。

`const` 在当前的命名空间中定义常量，而 `define()` 要实现类似效果必须在定义时传递完整的命名空间名称：

```php
namespace A\B\C;
// To define the constant A\B\C\FOO:
const FOO = 'BAR';
define('A\B\C\FOO', 'BAR');
```

`const` 从 PHP5.6 版本开始可以把数组用作常量值，而 `define()` 在 PHP7.0 版本开始才支持把数组用作常量值。

```php
const FOO = [1, 2, 3]; // valid in PHP 5.6
define('FOO', [1, 2, 3]); // invalid in PHP 5.6, valid in PHP 7.0
```

因为 `const` 是语言结构并且在编译时定义常量所以 `const` 会比 `define()` 稍稍快一些。

众所周知 PHP 在用 `define()` 定义了大量的常量后会影响效率。 因此出现了 [`apc_load_constants()`](http://php.net/apc_load_constants) 和 [`hidef`](https://pecl.php.net/package/hidef) 来绕过 `define()` 导致的效率问题。

最后，`const` 还能被用于在类和接口中定义常量，`define()` 只能被用于在全局命名空间中定义常量：

```php
class FOO {
    const BAR = 2;// 正确
}

class Baz {
    define('QUX', 2)// 错误
}
```

#### 总结

除非要在 if 分支里定义常量或者是通过表达式的值来命名常量，其他情况(即使是只是简单的为了代码的可读性)都推荐用 `const` 替代 `define()`。