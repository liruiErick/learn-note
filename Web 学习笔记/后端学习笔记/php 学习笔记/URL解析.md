# URL 解析

#### parse_url()

该函数解析一个 URL 并返回一个包含存在的 URL 的各种组件的关联数组。对严重畸形的URL，可能会返回 FALSE

```php
parse_url ( string $url [, int $component= -1 ])
```

`url` - 要解析的URL。无效的字符被 `_` 替换。

`component` - 可选，表示只返回特定部分的字符串。取值如下：

```php
PHP_URL_SCHEME
PHP_URL_HOST
PHP_URL_PORT
PHP_URL_USER
PHP_URL_PASS
PHP_URL_PATH
PHP_URL_QUERY
PHP_URL_FRAGMENT`
```

**实例**

```php
<?php
$url = 'http://username:password@hostname:9090/path?arg=value#anchor';

var_dump(parse_url($url));
var_dump(parse_url($url, PHP_URL_SCHEME));
var_dump(parse_url($url, PHP_URL_USER));
var_dump(parse_url($url, PHP_URL_PASS));
var_dump(parse_url($url, PHP_URL_HOST));
var_dump(parse_url($url, PHP_URL_PORT));
var_dump(parse_url($url, PHP_URL_PATH));
var_dump(parse_url($url, PHP_URL_QUERY));
var_dump(parse_url($url, PHP_URL_FRAGMENT));
?>
```

返回值

```
array(8) {
  ["scheme"]=>
  string(4) "http"
  ["host"]=>
  string(8) "hostname"
  ["port"]=>
  int(9090)
  ["user"]=>
  string(8) "username"
  ["pass"]=>
  string(8) "password"
  ["path"]=>
  string(5) "/path"
  ["query"]=>
  string(9) "arg=value"
  ["fragment"]=>
  string(6) "anchor"
}
string(4) "http"
string(8) "username"
string(8) "password"
string(8) "hostname"
int(9090)
string(5) "/path"
string(9) "arg=value"
string(6) "anchor"
```


#### parse_str()

将 URL 中的 Query 部分的参数解释到变量中

```php
parse_str($str, $query);
```

例如

```php
parse_str('name=Bill&age=60', $query);
print_r($query);
```

输出

```
Array
(
    [name] => 'Bill'
    [age] => 60
)
```

如果没有指定第二个参数，则它们会被输出到全局变量中

```php
echo $name; //=> 'Bill'
echo $age;  //=> 60
```
