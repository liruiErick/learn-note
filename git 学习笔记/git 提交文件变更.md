## 提交文件变更

#### git add

要将一个文件纳入到版本库管理，首先要将其添加到暂存区，然后才能提交到仓库中

将一个文件添加进暂存区

```
git add <file_name>
```

将当前工作区中所有未被添加进暂存区的文件添加进暂存区，除了 `.gitignore` 中指定的忽略文件以外

```
git add .
```

#### git commit

如果暂存区中有文件，则将其中的文件提交到仓库

```
git commit -m '<评论>'
```

带评论提交，用于说明提交内容、变更、作用等

```
git commit -m '<评论>'
```

#### git pull

从 origin 关联的远程仓库获取 `master` 分支上最新的文件到本地，并自动 merge

```
git pull origin master
```

如果当前分支在远程仓库中有对应的追踪分支（默认为同名分支），则可以省略远程仓库名和分支名

```
git pull
```

#### git fetch

如果不希望在拉取最新文件后自动 merge，可以使用该命令

从 origin 关联的远程仓库获取 `master` 分支上最新的文件到本地，该操作不会自动 merge

```
git fetch origin master
```

如果当前分支在远程仓库中有对应的追踪分支（默认为同名分支），则可以省略远程仓库名和分支名

```
git fetch
```

#### git merge

将当前本地仓库的 `master` 分支与刚刚从远程仓库更新的 `master` 分支进行合并

```
git merge origin/master
```

如果提示以下错误

```
fatal: refusing to merge unrelated histories
```

则需要在 merge 命令后添加一段指令

```
git merge origin/master --allow-unrelated-histories
```

合并文件时会进入 vim 编辑模式，如果没有冲突，可直接退出

#### git push

将本地仓库中的 commit 内容推送至 origin 关联的远程仓库

```
git push -u origin master
```

带上 `-u` 参数，在推送提交的同时，指定了 `origin` 为默认远程仓库，后面就可以不加任何参数使用直接使用 `git push` 了。

如果这里 push 不成功，出现以下提示

```
exec request failed on channel 0
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

这时可以将远程主机地址换成 HTTPS 链接后再试