## 关联Git仓库

#### 设置公钥

到本地根目录下的 `.ssh` 文件夹中，查看 `id_rsa.pub` 公钥

```shell
$ cd
$ cd .ssh
$ cat id_rsa.pub
```

打开 Git 仓库的公钥管理，创建一个公钥，将 `id_rsa.pub` 内容复制进去，保存。

测试链接是否成功

```shell
ssh -T git@git.oschina.net
```

#### 接下来在 Git 仓库的项目页面中复制下载链接。

HTTPS 链接，例如

```shell
https://git.oschina.net/baijunjie/forum-server.git
```

SSH 链接，例如

```shell
git@git.oschina.net:baijunjie/forum-server.git
```

在 Git 中 clone 项目有两种方式：`HTTPS` 和 `SSH`，它们的区别如下：

- `HTTPS`：不管是谁，拿到 url 随便 clone，但是在 push 的时候需要验证用户名和密码。
- `SSH`：clone 的项目你必须是拥有者或者管理员，而且需要在 clone 前添加 SSH Key。SSH 在 push 的时候，是不需要输入用户名的，如果配置 SSH key 的时候设置了密码，则需要输入密码的，否则直接是不需要输入密码的。

#### 本地项目文件内初始化git

到本地项目文件夹内进行初始化操作

```shell
$ git init
```

加入名为 origin 的远程主机

```shell
$ git remote add origin git@git.oschina.net:baijunjie/forum-server.git
```

添加所有改动文件

```shell
$ git add .
```

commit

```shell
$ git commit -m '更新'
```

将远程仓库的已有文件拉到本地

```shell
$ git fetch
```

然后进行 merge

```SHELL
$ git merge origin/master
```

如果提示以下错误

```shell
fatal: refusing to merge unrelated histories
```

则需要在 merge 命令后添加一段指令

```shell
$ git merge origin/master --allow-unrelated-histories
```

合并文件时会进入 vim 编辑模式，如果没有冲突，可直接退出

最后 push 提交

```shell
$ git push -u origin master
```

上面命令将本地的 `master` 分支推送到 `origin` 主机，同时指定 `origin` 为默认主机，后面就可以不加任何参数使用 `git push` 了。

如果这里 push 不成功，出现以下提示

```shell
exec request failed on channel 0
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

这时可以将远程主机地址换成 HTTPS 链接后再试

```shell
$ git remote rm origin
$ git remote add origin https://git.oschina.net/baijunjie/forum-server.gits
```


