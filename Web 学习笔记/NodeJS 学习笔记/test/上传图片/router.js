function router(handle, pathname, response, request) {
	console.log('收到路由请求 ' + pathname);

	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, request);
	} else {
		console.log(pathname + ' 没有对应的处理程序');
		return handle['error'](response, request);
	}
}

exports.router = router;