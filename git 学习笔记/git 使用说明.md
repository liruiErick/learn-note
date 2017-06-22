## Git 使用说明

### 常用命令

#### git status

查看当前分支的文件状态

```shell
$ git status
```

#### git add

添加全部文件变更

```shell
$ git add .
```

添加单个文件变更

```shell
$ git add {文件名}
```

#### git commit

提交变更

```shell
$ git commit -m '{修改说明}'
```

#### git fetch

从远程获取 `master` 分支到本地，不会自动 merge

```shell
$ git fetch origin master
```

#### git log

比较本地的 `master` 分支和 `origin/master` 分支的差别

```shell
$ git log -p master..origin/master
```

#### git merge

将当前分支与远程主机中的 `master` 分支进行合并

```shell
$ git merge origin/master
```

#### git pull

从远程获取最新版本并 merge 到本地

```shell
$ git pull origin master
```

如果当前分支在远程主机上有追踪分支（默认为同名分支），则可以省略远程主机名和分支名

```shell
$ git pull
```



### 修改仓库 url

查看当前仓库的 url

```shell
$ git remote -v
```

修改当前仓库的 url

```shell
$ git remote set-url origin https://github.com/baijunjie/PhotoClip.git
```

### 创建 .gitignore 隐藏文件

```shell
$ touch .gitignore
```

### 更多使用说明

http://www.ruanyifeng.com/blog/2014/06/git_remote.html