## isset() 函数

一般用来判断变量是否定义，且值不为 NULL

> bool isset ( mixed var [, mixed var [, ...]] )

```php
isset($var);
```

- 若变量不存在则返回 FALSE
- 若变量存在且其值为NULL，也返回 FALSE
- 若变量存在且值不为NULL，则返回 TURE
- 同时检查多个变量时，每个单项都符合上一条要求时才返回 TRUE，否则结果为 FALSE

使用 `unset()` 释放变量之后，它将不再是 `isset()`。 
PHP 函数 `isset()` 只能用于变量，传递任何其它参数都将造成解析错误。 
检测常量是否已设置可使用 `defined()` 函数。


## empty() 函数

检查一个变量是否为空

> bool empty ( mixed var )

```php
empty($var);
```

- 若变量不存在则返回 TRUE
- 若变量存在且其值为""、0、"0"、NULL、、FALSE、array()、var $var; 以及没有任何属性的对象，则返回 TURE
- 若变量存在且值不为""、0、"0"、NULL、、FALSE、array()、var $var; 以及没有任何属性的对象，则返回 FALSE

`empty()` 的返回值 `=! (boolean) $var`，但不会因为变量未定义而产生警告信息。参见转换为布尔值获取更多信息。
`empty()` 只能用于变量，传递任何其它参数都将造成 Paser error 而终止运行。 
检测常量是否已设置可使用 `defined()` 函数。 


## 总结

- 当要 判断一个变量是否已经声明的时候 可以使用 isset 函数
- 当要 判断一个变量是否已经赋予数据且不为空 可以用 empty 函数