### 安装 Nginx

```
$ yum install nginx
or
$ apt-get install nginx
```

如果提示需要 root 权限，则在命令前添加 `sudo` 即可。

安装完成后，可以先查看以下 Nginx 版本

```
$ nginx -v
```



### 配置 Nginx

跳转至 Nginx 的配置文件目录

```
$ cd /etc/nginx/conf.d
```

创建针对网站的配置文件，命名可以使用（域名+端口）的形式

```
$ sudo vi idguanjia-com-8510.conf
```

文件内容如下

```conf
upstream idguanjia {
    server 127.0.0.1:8510;
}

server {
    # 监听的端口
    listen 80;
    # 服务器 IP
    server_name 47.92.145.28;

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;

        proxy_set_header Host $http_host;
        proxy_set_header X-Nginx-Proxy true;

        proxy_pass http://idguanjia;
        proxy_redirect off;
    }
}
```

保存文件并退出，然后执行以下命令，对文件进行检测

```
$ sudo nginx -t
```

返回 Nginx 目录，查看 `nginx.conf` 文件，确保以下语句没有被注释

```conf
include /etc/nginx/conf.d/*.conf
```

最后重启以下 Nginx

```
$ sudo nginx -s reload
```



### 隐藏响应头中的server信息

在 Nginx 目录，查看 `nginx.conf` 文件，找到以下配置项

```conf
sendfile            on;
tcp_nopush          on;
tcp_nodelay         on;
keepalive_timeout   65;
types_hash_max_size 2048;
server_tokens       off
```

确保 `server_tokens` 为 `off`，如果没有该项，可以手动加上。

