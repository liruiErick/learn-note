## Git clean

`git clean` 命令用来从你的工作目录中删除所有没有tracked 过的文件。

`git clean` 经常和 `git reset --hard` 一起结合使用. 记住 reset 只影响被 track 过的文件, 所以需要 clean 来删除没有 track 过的文件。

结合使用这两个命令能让你的工作目录完全回到一个指定的 <commit> 的状态。



### 用法

一次clean的演习, 告诉你哪些文件会被删除. 记住他不会真正的删除文件, 只是一个提醒

```shell
$ git clean -n
```

删除当前目录下所有没有track过的文件. 他不会删除.gitignore文件里面指定的文件夹和文件, 不管这些文件有没有被track过

```shell
$ git clean -f　　
```

删除指定路径下的没有被track过的文件

```shell
$ git clean -f <path>
```

删除当前目录下没有被track过的文件和文件夹

```shell
$ git clean -df
```

删除当前目录下所有没有track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件

```shell
$ git clean -xf
```



### 讨论

`git reset --hard` 和 `git clean -f` 是一对好基友. 结合使用他们能让你的工作目录完全回退到最近一次 commit 的时候。

`git clean` 对于刚编译过的项目也非常有用. 如, 他能轻易删除掉编译后生成的 `.o` 和 `.exe` 等文件. 这个在打包要发布一个 release 的时候非常有用



### 例子

下面的例子要删除所有工作目录下面的修改, 包括新添加的文件. 假设你已经提交了一些快照了, 而且做了一些新的开发

```shell
$ git reset --hard
$ git clean -df
```

运行后, 工作目录和缓存区回到最近一次commit时候一摸一样的状态，`git status` 会告诉你这是一个干净的工作目录, 又是一个新的开始了！