#FileReader 对象（IE9及以下浏览器不支持）

FileReader 的实例拥有 4 个方法，其中 3 个用以读取文件，另一个用来中断读取。
下面的表格列出了这些方法以及他们的参数和功能，需要注意的是，无论读取成功或失败，方法并不会返回读取结果，这一结果存储在 result属性中。



##FileReader 对象的实例方法
| 方法名                | 参数              | 描述            |
| ------------------ | --------------- | ------------- |
| readAsBinaryString | file            | 将文件读取为二进制编码   |
| readAsText         | file,[encoding] | 将文件读取为文本      |
| readAsDataURL      | file            | 将文件读取为DataURL |
| abort              | (none)          | 中断读取操作        |

###readAsText
该方法有两个参数，其中第二个参数是文本的编码方式，默认值为 UTF-8。
这个方法非常容易理解，将文件以文本方式读取，读取的结果即是这个文本文件中的内容。

###readAsBinaryString
该方法将文件读取为二进制字符串，通常我们将它传送到后端，后端可以通过这段字符串存储文件。

###readAsDataURL
该方法将文件读取为一段以 data: 开头的字符串，这段字符串的实质就是 Data URL，Data URL是一种将小文件直接嵌入文档的方案。
这里的小文件通常是指图像与 html 等格式的文件。




## FileReader 对象的事件
- **onabort**：中断
- **onerror**：出错
- **onloadstart**：开始
- **onprogress**：正在读取
- **onload**：成功读取
- **onloadend**：读取完成，无论成功失败

文件一旦开始读取，无论成功或失败，实例的 result 属性都会被填充。
如果读取失败，则 result 的值为 null ，否则即是读取的结果，绝大多数的程序都会在成功读取文件的时候，抓取这个值。




## 具体使用方法

```js
// 判断浏览器是否支持FileReader接口
if (window.FileReader) {
	var fr = new FileReader();
} else {
	alert("您的浏览器不支持 HTML5 的 FileReader API， 因此无法初始化图片裁剪插件，请更换最新的浏览器！");
}

// 监听 file 控件的 onchange 事件
file.onchange(readAsDataURL);

function readAsDataURL() {
	if (!this.files.length) return;
	// 检验是否为图像文件
	if (!/image\/\w+/.test(this.files[0].type)) {
		alert("图片格式不正确，请选择正确格式的图片文件！");
		return false;
	} else {
		var fileReader = new FileReader();
		fileReader.onprogress = function(e) {
			console.log((e.loaded / e.total * 100).toFixed() + "%");
		};
		fileReader.onload = function(e) {
			$img.attr("src", this.result); // 设置图片base64值
		};
		fileReader.onerror = function(e) {
			alert("图片加载失败");
			$img.hide();
		};
		fileReader.readAsDataURL(this.files[0]); // 读取文件内容
	}
}

function readAsBinaryString() {
	var fileReader = new FileReader();
	fileReader.onload = function(e) {
		console.log(this.result);
	}
	//将文件以二进制形式读入页面
	fileReader.readAsBinaryString(this.files[0]);
}

function readAsText() {
	var fileReader = new FileReader();
	fileReader.onload = function(e) {
		console.log(this.result);
	}
	//将文件以文本形式读入页面
	fileReader.readAsText(this.files[0]);
}
```