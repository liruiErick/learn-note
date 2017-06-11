function router(handle, pathname, response, postData) {
	console.log('收到路由请求 ' + pathname);

	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, postData);
	} else {
		console.log(pathname + ' 没有对应的处理程序');
		return handle['error'](response, postData);
	}
}

exports.router = router;