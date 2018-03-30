## 分支管理

#### 创建分支

创建一个分支

```
$ git branch <branch_name>
```

切换到该分支

```
$ git checkout <branch_name>
```

两条命令合并简写

```
$ git checkout -b <branch_name>
```

#### 查看分支

查看本地分支信息

```
$ git branch
```

> 注意：在 `git branch` 的输出内容中，有一个分支，前面带有 `*` 号，这标识我们当前所在的分支。

查看相对详细的本地分支信息

```
$ git branch -v
```

查看所有远程分支

```
$ git branch -r
```

查看本地仓库与远程仓库的所有分支信息

```
$ git branch -av
```

#### 合并分支

这里以将指定分支合并到 master 分支为例

**合并整个分支**

首先要切换到 master 分支

```
$ git checkout master
```

然后将指定分支与当前 master 分支进行合并

```
$ git merge <指定分支名>
```

**仅合并分支中的部分内容**

如果仅仅是想 Copy 指定分支内的某些文件，可以直接将指定分支的指定内容强行覆盖到当前分支

```
$ git checkout <指定分支名> <要合并内容的路径> <要合并内容的路径2> ...
```

如果不想直接覆盖，希望 merge 这部分内容，需要几步操作配合完成

```
$ git checkout -b <临时分支名>
$ git merge <指定分支名>
$ git checkout master
$ git checkout <临时分支名> <要合并内容的路径>
$ git branch -d <临时分支名>
```

#### 处理冲突

在合并出现冲突时，Git 会暂停下来，等待你去解决合并产生的冲突。 这时使用 `git status` 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件。

```
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

```
<<<<<<< HEAD:index.html
<div id="footer">contact : email.support@github.com</div>
=======
<div id="footer">
 please contact us at support@github.com
</div>
>>>>>>> <branch_name>:index.html
```

当前主分支的代码在 `=======` 的上半部分，而 `<branch_name>` 分支的代码在 `=======` 的下半部分。

当冲突文件中的 `<<<<<<<` , `=======` , 和 `>>>>>>>` 这些行被完全删除后，对每个文件使用 `git add` 命令来将其标记为冲突已解决。

这时就可以输入 `git commit` 来完成合并提交。

#### 删除分支

删除本地分支

```
$ git branch -d <branch_name>
```

强制删除本地分支

```
$ git branch -D <branch_name>
```

删除远程分支（冒号前面的空格不能少）

```
$ git push origin :<branch_name>
```

#### 拉取远程分支并创建本地分支

**方式一**，该方式会在本地新建分支，但是不会自动切换到该本地分支，需要手动checkout。

```
$ git fetch origin <远程分支名>:<本地分支名>
```

**方式二**，该方式会在本地新建分支，并自动切换到该本地分支。

```
$ git checkout -b <本地分支名> origin/<远程分支名>
```

#### 将本地分支推送到远程仓库

如果是第一次推送，即远程仓库还没有这个分支。

```
$ git push origin <本地分支名>:<远程分支名>
```

如果希望远程分支名与本地分支名相同，则可以省略 `:<远程分支名>`。

```
$ git push origin <本地分支名>
```

如果远程仓库已经存在这个分支，则在当前分支为该分支的情况下，直接 `git push` 即可。

#### 建立本地分支和远程分支的关联

在本地仓库中的分支和远程仓库中的分支是对应的。一般情况下，本地仓库中的分支名称和远程仓库中的分支名称是一致的。

但可以使用以下命令将本地与远程的两个不同名称的分支进行关联。

```
$ git branch --set-upstream <本地分支名> origin/<远程分支名>
```
