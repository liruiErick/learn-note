# 上下文(Context)

#### ctx.req

Node 的 `request` 对象.

#### ctx.res

Node 的 `response` 对象.

绕过 Koa 的 response 处理是 **不被支持的**. 应避免使用以下 node 属性：

- `res.statusCode`
- `res.writeHead()`
- `res.write()`
- `res.end()`

#### ctx.request

koa 的 `Request` 对象.

#### ctx.response

koa 的 `Response` 对象.

#### ctx.state

推荐的命名空间，用于通过中间件传递信息和你的前端视图。

```js
ctx.state.user = await User.find(id);
```

#### ctx.app

应用程序实例引用

#### ctx.cookies.get(name, [options])

通过 `options` 获取 cookie `name`:

- `signed` 所请求的cookie应该被签名

Koa 使用 [cookies](https://github.com/jed/cookies) 模块，其中只需传递参数。

#### ctx.cookies.set(name, value, [options])

通过 `options` 设置 cookie `name` 的 `value` :

- `maxAge` 一个数字表示从 Date.now() 得到的毫秒数
- `signed` cookie 签名值
- `expires` cookie 过期的 `Date`
- `path` cookie 路径, 默认是`'/'`
- `domain` cookie 域名
- `secure` 安全 cookie
- `httpOnly` 服务器可访问 cookie, 默认是 **true**
- `overwrite` 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 **false**). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。

#### ctx.throw([status], [msg], [properties])

Koa 通过监听 `error` 事件来处理错误

```js
// 错误处理
app.on('error', (err, ctx) => {
    log.error('Server error: ', err, ctx)
});
```

抛出错误

```js
// 抛出一个 400 错误
ctx.throw(400);

// 抛出一个 400 错误，并设置错误 Message
ctx.throw(400, 'name required');

// 抛出错误的同时，为 Error 对象挂载自定义属性 user
// 在错误处理中可以通过 err 参数访问到该属性
ctx.throw(400, 'name required', { user: user });
```

例如 `ctx.throw(400, 'name required')` 等效于:

```js
const err = new Error('name required');
err.status = 400;
err.expose = true;
throw err;
```

请注意，这些是用户级错误，并用 `err.expose` 标记，这意味着消息适用于客户端响应，这通常不是错误消息的内容，因为您不想泄漏故障详细信息。

你可以根据需要将 `properties` 对象传递到错误中，对于装载上传给请求者的机器友好的错误是有用的。这用于修饰其人机友好型错误并向上游的请求者报告非常有用。

```js
ctx.throw(401, 'access_denied', { user: user });
```

Koa 使用 [http-errors](https://github.com/jshttp/http-errors) 来创建错误。

#### ctx.assert(value, [status], [msg], [properties])

当 `!value` 时，Helper 方法抛出类似于 `.throw()` 的错误。这与 node 的 [assert()](http://nodejs.org/api/assert.html) 方法类似.

```js
ctx.assert(ctx.state.user, 401, 'User not found. Please login!');
```

Koa 使用 [http-assert](https://github.com/jshttp/http-assert) 作为断言。

#### ctx.respond

为了绕过 Koa 的内置 response 处理，你可以显式设置 `ctx.respond = false;`。 如果您想要写入原始的 `res` 对象而不是让 Koa 处理你的 response，请使用此参数。

请注意，Koa _不_ 支持使用此功能。这可能会破坏 Koa 中间件和 Koa 本身的预期功能。使用这个属性被认为是一个 hack，只是便于那些希望在 Koa 中使用传统的 `fn(req, res)` 功能和中间件的人。
