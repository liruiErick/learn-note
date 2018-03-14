## 常用方法

print_r($arr); // 打印数组

usleep(100); // 阻断程序 1 秒后再向下执行，参数单位为微秒




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


#### php输出文件

必须有写入权限

```php
file_put_contents('/var/www/html/www/log.txt', 'hello world!');
```
