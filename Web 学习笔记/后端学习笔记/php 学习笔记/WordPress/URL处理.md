# URL 处理

#### 清理 URL

将一些危险的字符从 URL 中删除，拒绝没有提供白名单协议之一的 URL。如果该 URL 用于显示（默认行为），`&` 符号也将被替换。

```php
esc_url( $url, $protocols = null, $_context = 'display' );
```

`$url` (string) (Required) 要清理的 URL。

`$protocols` (array) (Optional) 可接受协议的白名单数组。默认值： `null`

`$_context` (string) (Optional) 将如何使用URL。默认值： `'display'`

协议数组取值范围:

```
array(
  'http',
  'https',
  'ftp',
  'ftps',
  'mailto',
  'news',
  'irc',
  'gopher',
  'nntp',
  'feed',
  'telnet',
  'mms',
  'rtsp',
  'svn',
  'tel',
  'fax',
  'xmpp'
);
```


#### 为 URL 添加参数

```php
add_query_arg( $key, $value, $url );
```

`$key` (string | array) (Required) 查询变量键或查询变量的关联数组。

`$value` (string) (Optional) 查询变量值。如果 `$key` 参数为数组，则这个参数为要对其执行操作的 URL。

`$url` (bool | string) (Optional) 要对其执行操作的 URL。

**实例**

```php
add_query_arg( 'key', 'value', 'http://example.com' );

add_query_arg( array(
    'key1' => 'value1',
    'key2' => 'value2',
), 'http://example.com' );
```


#### 为 URL 移除参数

```php
remove_query_arg( $key, $query = false );
```

`$key` (string | array) (Required) 要删除的一个或多个查询键。

`$query` (bool | string) (Optional) 当为 `false` 时，表示使用当前 URL。默认值： `false`