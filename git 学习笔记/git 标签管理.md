## 标签管理

在项目开发过程中，当一个版本发布完成时，是需要对代码打上标签，便于后续检索。获取处于其他的原因，需要对某个提交打上特定的标签。

#### 创建标签

```
git tag -a <tag_name> -m <comment> <commit_id>
```

`-a` 参数指定标签名， `-m` 添加备注信息， `commit_id` 指定打标签的提交。

#### 查看所有标签

```
git tag
```

#### 查看具体标签信息

```
git show <tag_name>
```

#### 切换到标签对应的代码

```
git checkout <tag_name>
```

#### 推送标签到远程仓库

推送单个标签到远程仓库

```
git push origin <tag_name>
```

一次性推送所有标签到远程仓库。

```
git push origin --tags
```

#### 删除本地标签

```
git tag -d <tag_name>
```

#### 删除远程标签

```
git push origin :refs/tags/<tag_name>

git push origin --delete <tag_name>

git push origin :<tag_name>
```

