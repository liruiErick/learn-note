## 创建 Git 仓库

### 创建本地版本库

首先，你需要新建一个存放版本库的目录，然后进入到该目录所在路径，然后执行：

```
git init
```

然后查看目录结构中，就可以看到包含有 `.git` 子目录，这就说明创建版本库成功了。


### 关联远程版本库

#### 新建关联

关联一个远程仓库，并起名为 origin

```
git remote add origin git@git.oschina.net:baijunjie/forum-server.git
```

将 origin 关联的远程仓库内的最新文件拉到本地

```
git fetch origin
```

这时前面关联的远程仓库的最新代码就被保存在本地的 origin 远程仓库映射中

#### 修改关联

修改已存在的 origin 仓库关联

```
git remote set-url origin https://github.com/baijunjie/PhotoClip.git
```

#### 删除关联

删除 origin 仓库关联

```
git remote rm origin
```

#### 查看已有关联

```
git remote -v
```


### Git 黑（白）名单

`.gitignore` 文件用于告诉 Git 忽略掉当前仓库目录中的某些文件

#### 创建 .gitignore 文件

Linux 使用以下命令

```
touch .gitignore
```

Windows cmd 使用以下命令

```
type nul>.gitignore
```

文件规则 Demo

```
# 忽略称为 .gitignore 的文件
.gitignore

# 忽略称为 .idea 的文件夹
.idea

# 忽略所有名称为 bin 的文件夹
bin

# 只忽略第一级目录中，名称为 bin 的文件夹
/bin

# 忽略所有扩展名为 .txt 的文件
*.txt

# 包含 src 目录
!/src

# 包含 /src/lib 目录
!/src/lib

# 忽略所有 deps 文件夹，除了第一级 deps 目录下的test文件夹
deps/
!/deps/test/
```

`.gitignore` 文件中，下面的规则会覆盖上面的规则。

`.gitignore` 只对尚未被 Git 追踪的文件有效，如果你要忽略的文件已经被添加到到暂存区中了，可以使用如下命令移除。

```
git rm --cached <file_name>
```


### 克隆远程版本仓库

直接从远程克隆版本仓库

```
git clone git@git.oschina.net:baijunjie/forum-server.git
```

> 注意： `git clone` 后面的仓库地址，可以支持多种协议，如 https， ssh 等。

克隆完成后，仓库关联的远程仓库名称默认为 origin


### 免密码设置

#### 设置公钥

到本地根目录下的 `.ssh` 文件夹中，查看 `id_rsa.pub` 公钥

```
cd
cd .ssh
cat id_rsa.pub
```

打开 Git 仓库的公钥管理，创建一个公钥，将 `id_rsa.pub` 内容复制进去，保存。

测试链接是否成功

```
ssh -T git@git.oschina.net
```

#### 接下来在 Git 仓库的项目页面中复制下载链接。

HTTPS 链接，例如

```
https://git.oschina.net/baijunjie/forum-server.git
```

SSH 链接，例如

```
git@git.oschina.net:baijunjie/forum-server.git
```

在 Git 中 clone 项目有两种方式：`HTTPS` 和 `SSH`，它们的区别如下：

- `HTTPS`： 不管是谁，拿到 url 随便 clone，但是在 push 的时候需要验证用户名和密码。
- `SSH`： clone 的项目你必须是拥有者或者管理员，而且需要在 clone 前添加 SSH Key。SSH 在 push 的时候，是不需要输入用户名的，如果配置 SSH key 的时候设置了密码，则需要输入密码的，否则直接是不需要输入密码的。


### 创建存放在本地远程版本库

如果不想使用互联网上的远程仓库，那么可以建立一个本地的“远程”仓库。

```
mkdir -p ~/<path>/<远程库名>.git                                             
cd ~/<path>/<远程库名>.git
git init --bare
```

或者用一条命令

```
git init --bare ~/git/<远程库名>.git
```

这个“远程”仓库中包含的文件和本地仓库中 `.git` 文件夹内包含的文件是相同的。

之后就可以在本地仓库中使用以下命令来连接到这个“远程”仓库，并push代码

```
git remote add origin localhost:/<path>/<远程库名>.git
git push -u origin master
```

这条命令隐含了几个 SSH 的知识点。熟悉它，可以帮助我们理解通常的 git 地址

1. git 地址其实就是个 SSH 地址

2. SSH 省略用户的话会假定是当前用户。

比如这个例子，完整的 SSH 连接是： `baijunjie@localhost:/<path>/<远程库名>.git`