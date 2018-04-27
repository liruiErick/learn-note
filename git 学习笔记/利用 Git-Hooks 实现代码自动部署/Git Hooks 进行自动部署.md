## 配置 Git 仓库

服务器上需要配置两个仓库，一个用于代码中转的远程仓库，一个用于用户访问的本地仓库。**这里的「远程仓库」并不等同于托管代码的「中央仓库」，这**两个仓库都是为了自动同步代码并部署网站而存在。

#### 创建服务器端仓库

在存放远程仓库的目录中（假设是 `/home/USER/git`）执行以下命令会创建一个包含 Git 各种配置文件的「裸仓库」。

```
$ git init --bare REPO_NAME.git
```

> `REPO_NAME` 表示自己起的仓库名称

切换到存放用户所访问文件的目录（假设为 `/home/USER/www`，如果不存在则在 `/home/USER` 中执行 `mkdir www`）：

```
$ git init
$ git remote add origin ~/git/REPO_NAME.git
$ git fetch
$ git checkout master
```

#### 配置远程仓库的 Git Hook

将目录切换至 `/home/USER/git/REPO_NAME.git/hooks` 会看到以下文件

```
applypatch-msg.sample     pre-commit.sample         prepare-commit-msg.sample
commit-msg.sample         pre-push.sample           update.sample
post-update.sample        pre-rebase.sample
pre-applypatch.sample     pre-receive.sample
```

以上的脚本文件就是 Hook 了。可以看到脚本文件的后缀名都是 sample，也就是说，这些都是 Git 自带的 Hook 示例，并不会真正地被执行，真正被执行的 Hook 是没有后缀的。([Git-Hooks 官方说明](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90))

比如，要启用 pre-push 的 Hook（在 push 操作前执行脚本，脚本返回值为 0 时执行 push 操作），在 hooks 目录下新建一个 pre-push 的文件（没有 `.sample` 后缀名）。

> 注意，在带有 `pre-` 前缀的 Hook 里，使用 `exit 0` 才能确保该操作会被继续，如果使用 `exit 1` 则该操作会被终止。

自动部署主要使用 post-receive 这个 Hook，但是初始 Hook 模板中没有这个文件模板，所以需要自行创建一个，其内容大致如下：

```shell
#!/bin/sh

unset GIT_DIR # 还原环境变量

MESSAGE=$(git log -1 HEAD --pretty=format:%s) # 获取 commit message
PRO="=>pro"
DepositoryPath=$PWD # 获取仓库路径(由于服务器在执行时没有用户，导致 ~/ 无法使用，因此需要重新跳回仓库目录)
DeployPathDev="../remote-dev" # 相对于远程仓库的路径或者绝对路径
DeployPathPro="../remote-pro" # 相对于远程仓库的路径或者绝对路径

# 通过 commit message 中是否包含 '=>pro' 来判断需要部署的项目路径
# DeployPath 是相对于 REPO_NAME.git 的目录，而不是 hooks 文件夹
if [[ "$MESSAGE" == *"$PRO"* ]]; then
    DeployPro=true
    echo "╔═══════════════════════════════════════╗"
    echo "║ Deploy to the production environment. ║"
    echo "╚═══════════════════════════════════════╝"
else
    DeployPro=false
    echo "╔════════════════════════════════════════╗"
    echo "║ Deploy to the development environment. ║"
    echo "╚════════════════════════════════════════╝"
fi

if $DeployPro; then

{
    cd $DeployPathPro
} || {
    echo "╔══════════════════════════════════════════════════════════════════╗"
    echo "║ Error, The production environment deployment path was not found! ║"
    echo "╚══════════════════════════════════════════════════════════════════╝"
    exit 1
}

{
    git reset --hard origin/master
    git clean -f
    git pull origin master
    # npm install
    # npm run test
    # npm run start
    # pm2 restart xxx
    cd $DepositoryPath
} || {
    echo "╔══════════════════════════════════════════════════╗"
    echo "║ Error, Production environment deployment failed! ║"
    echo "╚══════════════════════════════════════════════════╝"
    exit 1
}

echo "╔═════════════════════════════════════════════════╗"
echo "║ Production environment deployment successfully. ║"
echo "╚═════════════════════════════════════════════════╝"

fi

{ # try
    cd $DeployPathDev
} || { # catch
    echo "╔═══════════════════════════════════════════════════════════════════╗"
    echo "║ Error, The development environment deployment path was not found! ║"
    echo "╚═══════════════════════════════════════════════════════════════════╝"
    exit 1
}

{ # try
    git reset --hard origin/master # 用 fetch 到的最新远程 master 分支强制覆盖掉本地 master 分支
    git clean -f                   # 清理没有被追踪的文件(仅在服务器环境的文件与git仓库的文件完全相同时才使用此命令，否则会意外删除掉服务器上的重要文件)
    git pull origin master         # 拉取远程仓库的最新代码

    # 这里还可以顺便将代码推送到第三方代码托管平台(必需设置 SSH 免密码登录)
    # ehco "Push to third-party repository."
    # git push github master
    # ehco "Push to third-party repository successfully."

    # npm install                  # 重新安装 npm 依赖
    # npm run test                 # 测试项目
    # npm run start                # 运行项目
    # pm2 restart xxx              # pm2 重启项目
} || { # catch
    echo "╔═══════════════════════════════════════════════════╗"
    echo "║ Error, Development environment deployment failed! ║"
    echo "╚═══════════════════════════════════════════════════╝"
    exit 1
}

echo "╔══════════════════════════════════════════════════╗"
echo "║ Development environment deployment successfully. ║"
echo "╚══════════════════════════════════════════════════╝"

exit 0

```

> 注意，如果不加 `unset GIT_DIR` 就会报出 `remote: fatal: not git respository:’.’` 错误

这里还需要注意，在保存后一定要赋予文件可执行权限，否则该脚本可能无法执行

```
$ chmod +x post-receive
```

另外，如果提交后显示出以下错误：

```
remote: hooks/post-receive: [[: not found
```

则表示当前服务器的 shell 不支持 `if [[ ]]` 这个扩展，那么可以使用以下脚本代替判断

```shell
echo "$MESSAGE" | grep "$PRO"
if test $? -eq 0; then
```

这里的 `$?` 表示最后命令的退出状态，也就是前一句的 `"$MESSAGE" | grep "$PRO"` 的退出状态，如果匹配到了 `$?` 就为 0，否则表示没有匹配到。需要注意的是，当 `$?` 使用过一次之后，它的值就会变为 0，所以这个值不能够被再次用于判断，如果需要多次使用，可以在第一次使用时将它赋值给变量。

#### 修改web服务器根目录的权限

因为执行拉取的时候是 Git 用户所以要把 Web 服务器根目录(`/home/USER/www`) 的权限设定为 Git 用户

```
$ chown -R git:git /home/USER/www
```

如果没有做上述操作就会报：

```
cannot open .git/FETCH_HEAD:Permission denied
```

#### 添加的仓库源

在本地仓库添加这个服务器上的远程仓库源，这里将其命名为 `deploy`，和托管代码的中央仓库 `origin` 区分开。

```
$ git remote add deploy user@192.168.0.1:/home/USER/git/REPO_NAME.git
```

这样执行 `git push deploy master` 服务器的 Git 仓库会更新，同时服务器上的网站服务器根目录 `/home/USER/www` 也会自动执行 `git pull` 同步本地的推送，从而实现自动部署了。



## 免密码接远程连服务器

密钥是免登录连接服务器的通行证。如果本地已经存在并且不想另外生成的话，可以跳过此步。

#### 生成 SSH 密钥

`cd ~/.ssh` 切换目录后，执行以下命令生成一对具有相同名字的密钥（私钥和公钥，默认为 `id_rsa` 和 `id_rsa.pub`）

```
$ ssh-keygen -t rsa -C "bjj19851010@gmail.com"
```

`-C` 后跟一个用于区分密钥的标识，一般使用邮箱

如果私钥名字不是默认的话，需要手动加入到被「认证」的私钥列表中，否则每次连接服务器都会提示输入服务器的密码。这个问题可以通过设置 SSH config 来解决。

编辑 `~/.ssh/config` 文件（如果不存在则 `touch ~/.ssh/config` 创建一下），添加以下内容：

```
Host HOST_ALIAS                     # 用于 SSH 连接的别名，最好与 HostName 保持一致
HostName SERVER_DOMAIN              # 服务器的域名或 IP 地址
Port SERVER_PORT                    # 服务器的端口号，默认为 22，可选
User SERVER_USER                    # 服务器的用户名
PreferredAuthentications publickey
IdentityFile ~/.ssh/PRIVATE_KEY     # 本机上存放的私钥路径
```

#### 服务器端认证

1) 先用 `pbcopy < ~/.ssh/PRIVATE_KEY.pub` 将公钥复制到剪贴板

2) 通过 `ssh USER@SERVER` 登录服务器，这时会提示输入密码（它也许只有这么一次「询问」的机会）

3) 成功登录后 `vim ~/.ssh/authorized_keys`，在合适的位置 cmd + V 并保存退出（同时 exit 退出 SSH 连接）。

**一行命令搞定以上三步**

```
$ ssh-copy-id [-i [identity_file]] [user@]machine
```

`-i` 参数用来指定公钥文件

例如，把本地的ssh公钥文件安装到远程主机对应的账户下：

```
$ ssh-copy-id user@server
or
$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server
```
