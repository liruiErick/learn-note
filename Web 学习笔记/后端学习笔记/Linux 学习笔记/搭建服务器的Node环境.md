### 安装nvm

nvm 是一个 node 版本管理器

GitHub: https://github.com/creationix/nvm

在readme中找到以下安装语句，根据系统选择一个安装

cURL:

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

or Wget:

```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

安装完成后需要重新登陆服务器才可以使用。



### 安装node

先去node官网查看最新的版本号

https://nodejs.org/en/

然后使用以下命令安装该版本

```
$ nvm install v6.10.3
```

出现以下提示后，表示安装成功了

```
Now using node v6.10.3 (npm v3.10.10)
Creating default alias: default -> 6.10.3 (-> v6.10.3)
```



### 设置nvm默认使用的node版本

如果 nvm 之前使用过其他版本的 node，那么在安装新版本 node 后需要手动切换到新版

```
$ nvm use v6.10.3
```

让 nvm 默认使用该版本的 node

```
$ nvm alias default v6.10.3
```



### 使用cnpm

`cnpm` 是淘宝团队为国(墙)内用户建立的 `npm` 镜像，同步频率目前为10分钟一次。

`cnpm` 与 `npm` 用法相同，不过在 `npm` 可用的情况下还是推荐使用 `npm`。

安装 `cnpm`

```
$ npm install cnpm -g --registry=https://registry.npm.taobao.org
```

由于 `cnpm` 是一个镜像，有时模块可能不是最新的，这时可以使用 `syns` 命令进行强制更新。

```
$ cnpm syns jquery
```

注意，这个更新仅仅是更新镜像站点中的模块，之后还需要在执行一次安装。

其实也可以不安转 cnpm，直接通过传参的形式，临时改变注册源进行安装

```
$ npm install jquery --registry=https://registry.npm.taobao.org
```

