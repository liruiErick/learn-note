## Git 版本回退

#### 方法

```shell
$ git reset --hard <commit_SHA>
$ git push origin HEAD --force
```

#### 说明

根据 `–soft`、 `–mixed`、 `–hard`，会对 working tree 和 index 和 HEAD 进行重置:

`git reset –mixed`：此为默认方式，不带任何参数的 git reset，即时这种方式，它回退到某个版本，只保留源码，回退 commit 和 index 信息。
`git reset –soft`：回退到某个版本，只回退了commit的信息，不会恢复到 index file 一级。如果还要提交，直接 commit 即可。
`git reset –hard`：彻底回退到某个版本，本地的源码也会变为上一个版本的内容。


`HEAD` 最近一个提交
`HEAD^` 上一次
`<commit_SHA>`  每次 commit 的 SHA 值，可以用 git log 看到，也可以在页面上 commit 标签页里找到。