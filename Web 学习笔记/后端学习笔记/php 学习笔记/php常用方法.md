# 常用方法

```php
print_r($arr); // 打印数组
usleep(100); // 阻断程序 1 秒后再向下执行，参数单位为微秒
```



#### 克隆

克隆一个对象（必须是由 new 创建出来的对象，才能使用 `clone` 运算符）

```php
$objectB = clone $objectA;
```

克隆一个数组（你没看错，PHP 中数组赋值的是值，而不是引用）

```php
$arrayB = $arrayA;
```




#### 类型判断

`is_array()` - 判断是否是数组类型

`is_bool()` - 判断是否是布尔类型

`is_float()` - 判断是否是单精度浮点类型

`is_double()` - 判断是否是双精度浮点类型。这个基本同 is_float 一样，主要区别就是在小数点后面数字长度达到一定长度后，is_float 可能返回false，而 is_double 会依旧返回 true。

`is_int()` - 判断是否是整数类型

`is_integer()` - 此函数是 is_int() 的别名函数

`is_null()` - 判断是否是 NULL。注意这里不是空，对于''，0或者'0'他都将返回false。

在下列情况下一个变量会被认为是 NULL：

- 被赋值为 NULL。
- 尚未被赋值。
- 被 unset()。

`is_numeric()` - 判断是否是数字。这个函数判断条件非常宽松，只要是数字，无论你是字符串类型的，还是数字类型，无论是正的，负的，0，还是浮点数，都将返回true

`is_object()` - 判断是否是一个对象

`is_resource()` - 判断是否是资源类型

`is_scalar()` - 判断是否是一个标量

`is_string()` - 判断是否是一个字符串

`gettype($arry)` - 获取变量数据类型，输出 => array 

`var_dump($var)` - 输出变量的类型和值，如：float(10.365) 



#### 定义常量

```php
define("HOST", "http://www.xxx.com/");
```

它使用三个参数：

- 首个参数定义常量的名称
- 第二个参数定义常量的值
- 可选的第三个参数规定常量名是否对大小写不敏感。默认是 false。

检查一个常亮是否被定义

```php
defined("HOST"); // 如果被定义则返回 1
```



#### 数组转为函数的参数

```php
call_user_func_array(array($wpdb, 'prepare'), $params);
// php 5.6
$wpdb->prepare(...$params);
```



#### 函数中获取参数

```php
function bjj_log(...$args) {
    // php 5.6 可以使用 ...$args 的方式获得
    // 也可以使用以下方式获得
    $number = func_num_args(); //返回函数调用时，给出参数的数量；
    $args = func_get_args(); //这个是用来返回参数的数组
    $arg = func_get_arg(n); //可以返回第N-1位参数的值，因为引索的起始是0
    
    foreach ($args as $arg) {
        echo '<br/>===========================<br/>';

        if (is_array($arg) || is_object($arg)) {
            print_r($arg);
        } else {
            echo $arg;
        }
    }
}
```





#### php输出文件

必须有写入权限

```php
file_put_contents('/var/www/html/www/log.txt', 'hello world!');
```
