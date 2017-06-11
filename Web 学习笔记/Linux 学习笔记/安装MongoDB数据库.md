### MongoDB安装手册

CentOS 安装

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/

Ubentu 安装

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/



### 开启 MongoDB

启动

```shell
$ sudo service mongod start
```

可以通过查看日志，确认是否启动成功

```shell
$ sudo cat /var/log/mongodb/mongod.log
```

停止

```shell
$ sudo service mongod stop
```

重启

```shell
$ sudo service mongod restart
```

连接 MongoDB

```shell
$ mongo
```

退出连接

```shell
$ exit
```



### 修改默认端口

打开 MongoDB 的配置文件

```shell
$ sudo vi /etc/mongod.conf
```

找到 net 选项，这里可以修改端口号和IP地址

```
net:
  port: 27017
  bindIp: 127.0.0.1 
```

注意，修改过端口号以后，在连接 MongoDB 时要以参数的形式将新端口号传入

```shell
$ mongo --port 27017
```



