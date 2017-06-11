###借助pm2让Node服务常驻 

pm2 是一个带有负载均衡功能的Node应用的进程管理器

安装 pm2

```shell
$ npm install pm2 -g
```

直接用 pm2 启动 node 服务

```shell
$ pm2 start app.js
```

查看 pm2 上运行的服务列表

```shell
$ pm2 list
```

查看服务的详细信息

```shell
$ pm2 show app
```

查看当前服务的实时信息

```shell
$ pm2 logs
```

0秒停机重载:
这项功能允许你重新载入代码而不用失去请求连接。
注意：

- 仅能用于web应用
- 运行于Node 0.11.x版本
- 运行于 cluster 模式（默认模式）

```shell
$ pm2 reload all
```

其他命令

```shell
$ pm2 list               # 显示所有进程状态
$ pm2 monit              # 监视所有进程
$ pm2 logs               # 显示所有进程日志
$ pm2 stop all           # 停止所有进程
$ pm2 restart all        # 重启所有进程
$ pm2 reload all         # 0秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 stop 0             # 停止指定的进程
$ pm2 stop app           # 停止 app 进程
$ pm2 restart 0          # 重启指定的进程
$ pm2 startup            # 产生 init 脚本 保持进程活着
$ pm2 web                # 运行健壮的 computer API endpoint (http://localhost:9615)
$ pm2 delete 0           # 杀死指定的进程
$ pm2 delete all         # 杀死全部进程
```

运行进程的不同方式

```shell
$ pm2 start app.js -i 3    # 启动3个进程,正确的进程数目依赖于Cpu的核心数目
$ pm2 start app.js -i max  # 根据有效CPU数目启动最大进程数目
$ pm2 start app.js -i max -- -a 23  # 在--之后给 app.js 传递参数
$ pm2 start app.js -i max -e err.log -o out.log  # 启动并生成一个配置文件

$ pm2 start app.js -x  # 用fork模式启动 app.js 而不是使用 cluster
$ pm2 start app.js -x -- -a 23  # 用fork模式启动 app.js 并且传递参数 (-a 23)

$ pm2 start app.js --name serverone  # 启动一个进程并把它命名为 serverone

$ pm2 start app.json  # 启动进程, 在 app.json 里设置选项

# 你也可以执行用其他语言编写的app ( fork 模式):
$ pm2 start my-bash-script.sh    -x --interpreter bash
$ pm2 start my-python-script.py -x --interpreter python
```

