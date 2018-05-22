## 标签管理

在项目开发过程中，当一个版本发布完成时，是需要对代码打上标签，便于后续检索。获取处于其他的原因，需要对某个提交打上特定的标签。

#### 创建标签

```shell
$ git tag <tag_name>
or
$ git tag -a <tag_name> -m <comment> <commit_id>
```

`-a` - 参数指定标签名

`-m` - (可选) 添加备注信息

`commit_id` - (可选) 指定打标签的提交。

#### 查看所有标签

```shell
$ git tag
```

#### 查看具体标签信息

```shell
$ git show <tag_name>
```

#### 切换到标签对应的代码

类似于切换分支

```shell
$ git checkout <tag_name>
```

这个操作其实会创建一个名为 `(HEAD detached at <tag_name>)` 的临时分支

如果需要返回到切换标签之前的状态，只需要切换回之前的分支即可，例如：

```shell
$ git checkout master
```

当切换回之前分支后，该临时分支会自动删除。

如果需要对标签进行修改，可以直接创建并切换到一个该标签对应的分支：

```shell
$ git checkout -b <branch_name> <tag_name>
```

修改完成后删除该标签，并重新创建该标签即可。

#### 推送标签到远程仓库

推送单个标签到远程仓库

```shell
$ git push origin <tag_name>
```

推送所有标签到远程仓库

```shell
$ git push origin --tags
or
$ git push --tags
```

#### 获取远程标签

从远程仓库获取单个标签

```shell
$ git fetch origin tag <tag_name>
or
$ git pull origin tag <tag_name>
```

从远程仓库获取所有标签

```shell
$ git fetch origin --tags
or
$ git pull origin --tags
```

#### 删除本地标签

```shell
$ git tag --delete <tag_name>
or
$ git tag -d <tag_name>
```

#### 删除远程标签

```shell
$ git push origin --delete <tag_name>
or
$ git push origin -d <tag_name>

# 推送一个空分支到远程分支，其实就相当于删除远程分支
$ git push origin :<tag_name>
or
$ git push origin :refs/tags/<tag_name>
```

