# Fetch

基于 Promise 设计，可以用于替代 XHR(ajax)

```js
// ES5
fetch(url).then(function(response) {
	return response.json();
}).then(function(data) {
	console.log(data);
}).catch(function(e) {
	console.log("Oops, error");
});

// ES6
fetch(url).then(response => response.json())
	.then(data => console.log(data))
	.catch(e => console.log("Oops, error", e))
```

## 语法

```
Promise<Response> fetch(input[, init]);
```

## 参数

#### input

定义要获取的资源。这可能是：

- 一个 [`USVString`](https://developer.mozilla.org/zh-CN/docs/Web/API/USVString) 字符串，包含要获取资源的 URL。
- 一个 [`Request`](https://developer.mozilla.org/zh-CN/docs/Web/API/Request) 对象。

#### init

一个配置项对象，包括所有对请求的设置。可选的参数有：

- `method`: 请求使用的方法，如 `GET、POST。`
- `headers`: 请求的头信息，形式为 [`Headers`](https://developer.mozilla.org/zh-CN/docs/Web/API/Headers) 对象或 [`ByteString`](https://developer.mozilla.org/zh-CN/docs/Web/API/ByteString)。
- `body`: 请求的 body 信息：可能是一个 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)、[`BufferSource`](https://developer.mozilla.org/zh-CN/docs/Web/API/BufferSource)、[`FormData`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)、[`URLSearchParams`](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)或者 [`USVString`](https://developer.mozilla.org/zh-CN/docs/Web/API/USVString) 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
- `mode`: 请求的模式，如 `cors、` `no-cors 或者` `same-origin。`
- `credentials`: 请求的 credentials，如 `omit、``same-origin 或者` `include。`
- `cache`:  请求的 cache 模式: `default`, `no-store`, `reload`, `no-cache`, `force-cache`, or `only-if-cached。`
- `redirect`: 可用的 redirect 模式: `follow` (自动重定向), `error` (如果产生重定向将自动终止并且抛出一个错误), 或者 `manual` (手动处理重定向). 在Chrome中，Chrome 47之前的默认值是 follow，从 Chrome 47开始是 manual。
- `referrer`: 一个 [`USVString`](https://developer.mozilla.org/zh-CN/docs/Web/API/USVString) 可以是 `no-referrer、``client`或一个 URL。默认是 `client。`
- `referrerPolicy`: Specifies the value of the referer HTTP header. May be one of `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `unsafe-url`.
- `integrity`: Contains the [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

#### 返回值

一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/API/Promise)，resolve 时回传 [`Response`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response) 对象。

## Demo

#### Post JSON

```js
fetch('/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
    })
})
```

#### Post form

```js
var form = document.querySelector('form')

fetch('/users', {
    method: 'POST',
    body: new FormData(form)
})
```

#### File upload

```js
fetch('/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
    })
})
```



## 浏览器支持

以下浏览器支持 Fetch
- Firefox 39+
- Chrome 43+
- Opera 31+
- Android 4.4+

以下浏览器不支持 Fetch
- IE 11-
- Edge 13-
- Safari 9-
- Opera Mini 8-


## 常见坑

- Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})

- 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。

## 参考文档

https://github.com/github/fetch