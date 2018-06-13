## 版本回退

Git 版本回退包括两方面的操作，一个是回退进入暂存区的文件，一个是回退未进入暂存区只停留在工作区的文件。

`git reset` 用于回退暂存区的文件

`git clean` 用于回退未进入暂存区的文件

结合使用这两个命令能让你的工作目录完全回到一个指定的 commit 的状态。


### git reset

回退进入暂存区的文件

#### 回退到历史版本

进入暂存区的文件需要通过 `git reset --hard` 来回退到我们需要的特定版本

```sh
$ git reset --hard HEAD
or
$ git reset --hard <commit_id>
```

- `git reset –mixed`： 此为默认方式，不带任何参数的 git reset，即时这种方式，它回退到某个版本，只保留源码，回退 commit 和 index 信息
- `git reset –soft`： 回退到某个版本，只回退了commit的信息，不会恢复到 index file 一级。如果还要提交，直接 commit 即可
- `git reset –hard`： 彻底回退到某个版本，本地的源码也会变为上一个版本的内容

如果不指定 `HEAD`，则默认回退到最后一个提交。也可以指定回退版本：

- `HEAD` or `HEAD~0`： 最后一个提交
- `HEAD^` or `HEAD~1`： 倒数第二个提交
- `<commit_id>`： 每次 commit 的 SHA 值，可以通过 `git log` 查看提交的历史记录中找到。

#### 回到未来的某个提交

当退回到某个提交的版本以后，再通过 `git log` 是无法显示在这之后的提交信息的。但是，通过 `git reflog` 可以获取到操作命令的历史

因此，想要回到未来的某个提交，先通过 `git reflog` 从历史命令中找到想要回到的提交版本的 ID，然后通过 `git reset --hard`来切换

```sh
$ git reflog
```

#### 放弃本地修改，强制覆盖

用 fetch 到的最新远程 master 分支强制覆盖掉本地 master 分支

```sh
$ git fetch --all
$ git reset --hard origin/master
```

`git fetch` 只是下载远程仓库中的最新文件，不做任何的合并

`git reset` 把 HEAD 指向刚刚下载的最新的版本

#### 远程仓库回退

首先需要将本地版本回退到指定的版本，然后将已经回到的当前 `HEAD` 强制推送到远程仓库。

```sh
$ git reset --hard <commit_id>
$ git push origin HEAD --force
```

#### 撤销修改

如果并不想回退版本，仅仅是希望撤销当前未提交的暂存区修改，可以使用 `checkout` 来进行撤销操作

丢弃暂存区中某个文件修改

```sh
$ git checkout -- <file_name>
```

丢弃暂存区中的所有修改。效果与 `git reset --hard HEAD` 类似

```sh
$ git checkout -- .
```

> 注意： `git checkout --` 中的 `--` 是必须的。


### git clean

回退未进入暂存区只停留在工作区的文件

`git clean` 对于刚编译过的项目也非常有用. 如, 他能轻易删除掉编译后生成的 `.o` 和 `.exe` 等文件. 这个在打包要发布一个 release 的时候非常有用

#### 用法

一次 clean 的演习, 告诉你哪些文件会被删除. 记住他不会真正的删除文件, 只是一个提醒

```sh
$ git clean -n
```

删除当前目录下所有未被添加进暂存区的文件，不包含文件夹

```sh
$ git clean -f
```

> 注意，它不会删除 `.gitignore` 文件里面指定的文件夹和文件

删除指定路径下所有未被添加进暂存区的文件，不包含文件夹

```sh
$ git clean -f <path>
```

删除当前目录下所有未被添加进暂存区的文件和文件夹

```sh
$ git clean -df
```

删除当前目录下所有未被添加进暂存区的文件和文件夹，不管他是否是 `.gitignore` 文件里面指定的文件。

```sh
$ git clean -xf
```


### 总结

`git reset` 和 `git clean` 是一对好基友. 结合使用他们能让你的工作目录完全回退到最近一次 commit 的时候

```sh
$ git reset --hard
$ git clean -df
```

或者

```sh
$ git checkout -- .
$ git clean -df
```

运行后, 工作目录和缓存区回到最近一次 commit 时候一摸一样的状态，`git status` 会告诉你这是一个干净的工作目录, 又是一个新的开始了！
