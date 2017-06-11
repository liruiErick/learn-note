### 安装

#### 下载安装

- 下载地址：http://www.mongodb.org/downloads

- 下载得到 .tgz 文件，例如：mongodb-osx-ssl-x86_64-3.4.4.tgz

- 将 .tgz 文件解压到一个目录中，例如：./mongodb/

#### brew 安装

```shell
$ brew install mongodb
```



### 创建文件夹

/data/db
/data/log

分别用来安装db和日志文件，在log文件夹下创建一个日志文件 MongoDB.log

可以使用命令创建

```shell
$ mkdir -p data/db
$ mkdir -p data/log
```



### 启动

#### 下载安装的启动

```shell
$ cd ./mongodb/bin/
$ ./mongod --dbpath /Users/baijunjie/Documents/前端工作/MongoDB/data/db
```
也可以使用 config 启动

```shell
$ ./mongod --config ../mongod.conf
```

重新开启一个终端

```shell
$ cd ./mongodb/bin/
$ ./mongo
```
如果执行正常，则现在即可操作数据库

#### brew 安装的启动

```shell
$ mongod --config ../mongod.conf
```
重新开启一个终端
```shell
$ mongo
```

如果执行正常，则现在即可操作数据库



### 关闭

#### 方式一

在第一个窗口直接按 control + C

#### 方式二

在第二个窗口切换数据库到 admin
```shell
$ use admin
```
然后执行
```shell
$ db.shutdownServer({force : true})
```



### 修复

有时 mongodb 修复会因为一些错误而无法启动，这时就要对其进行修复
```shell
$ mongod --repair
```


