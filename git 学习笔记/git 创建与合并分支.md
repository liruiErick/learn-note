## Git 创建与合并分支

#### 创建分支

创建一个分支

```shell
$ git branch my-branch
```

切换到该分支

```shell
$ git checkout my-branch
```

两条命令合并简写

```shell
$ git checkout -b my-branch
```

#### 合并分支

切换到主分支

```shell
$ git checkout master
```

将 `my-branch` 合并到主分支

```shell
$ git merge my-branch
```

#### 处理冲突

在合并出现冲突时，Git 会暂停下来，等待你去解决合并产生的冲突。 这时使用 `git status` 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件。

```shell
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

    both modified:      index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。 Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。 出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：

```shell
<<<<<<< HEAD:index.html
<div id="footer">contact : email.support@github.com</div>
=======
<div id="footer">
 please contact us at support@github.com
</div>
>>>>>>> my-branch:index.html
```

当前主分支的代码在 `=======` 的上半部分，而 `my-branch` 分支的代码在 `=======` 的下半部分。

当冲突文件中的 `<<<<<<<` , `=======` , 和 `>>>>>>>` 这些行被完全删除后，对每个文件使用 `git add` 命令来将其标记为冲突已解决。

这时就可以输入 `git commit` 来完成合并提交。

#### 删除分支

```shell
$ git branch -d my-branch
```

