## 进阶操作

### 查看文件状态

不论新建文件，将文件加入暂存区，或者其他的修改等等，都可以通过该命令来随时查看仓库中文件的状态

```
git status
```


### 文件修改对比

如果对某个文件做了修改，这时候就可以通过该命令来查看具体的修改内容

```
git diff Readme.md
```

一次性查看版本库中所有的改动

```
git diff
```


### 查看历史记录

该命令可以查看所有的 commit 历史记录

```
git log
```

在输出的内容中，可以看到每次提交的 ID，是一个 40 位的字符串。

有时提交内容过多，而我们只需要看每条提交记录的概要，则可以添加以下参数来单行显示历史提交记录

```
git log --pretty=oneline
```

比较本地的 `master` 分支和 `origin/master` 分支的 commit 差别

```
git log -p master..origin/master
```


### 配置

#### 在安装完成 Git 后，开始正式使用前，是需要有一些全局设置的，如用户名、邮箱。

设置的主要命令是 `git config`:

```
git config --global user.name "your name"      // 设置全局用户名
git config --global user.email "your email"    // 设置邮箱
```

其中， `--global` 指定为全局配置，不使用该参数，则为当前所在仓库配置。

#### 除了用户名、邮箱之外，还有很多的配置可以用来自定义 Git，如：

```
git config --global color.ui true        // 让 Git 显示不同的颜色
git config core.ignorecase true          // 让 Git 对仓库中的文件大小写敏感
```

#### 查看所有的已经做出的配置：

```
git config --list
or
git config -l
```


### 临时保存修改

在执行很多的 Git 操作的时候，是需要保持当前操作的仓库/分支处于 clean 状态，及没有未提交的修改。如 `git pull`， `git merge` 等等，如果有未提交的修改，这些将无法操作。

但是做这些事情的时候，你可能修改了比较多的代码，却又不想丢弃它。那么，你需要把这些修改临时保存起来，这就需要用到 `git stash`。

#### 临时保存修改

这样仓库就可以回到 clean 状态。

```
git stash
```

> 注意：可以多次的 `git stash` 来保存不同的临时修改。

#### 查看临时保存

当你临时保存以后，后面还是要取回来的，那它们在哪里呢？

```
git stash list
```

#### 恢复临时保存

当我们处理完其他操作时，想要恢复临时保存的修改。

```
git stash apply      // 恢复所有保存的临时修改
git stash pop        // 恢复最近一次保存的临时修改
```

#### 丢弃临时保存

丢弃所有保存的临时修改

```
git stash clear
```


### 删除文件

如果文件还未添加到暂存区中，对想删除文件可以直接物理删除

如果文件已经添加到暂存区中，执行以下命令来删除想要删除的文件

```
git rm -f <file_name>
```

如果仅仅想将文件移出暂存区，可以使用 `--cached` 参数

```
git rm --cached <file_name>
```

如果文件已经被提交，则需要 `git rm` 来删除：

```
git rm <file_name>
```

在 git 2.0+，以上命令与以下命令是等价的

```
rm <file_name>
git add <file_name>
```

> 注意： `git rm` 只能删除已经提交到版本库中的文件。其他状态的文件直接用这个命令操作是出错的。

