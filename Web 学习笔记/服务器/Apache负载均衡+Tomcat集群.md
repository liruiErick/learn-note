## 本机环境

- Windows 7 64位操作系统

- java版本 "1.6.0_20"

- Apache安装包httpd-2.2.21-win32-x86-no_ssl.msi，默认安装

- tomcat压缩包（apache-tomcat-6.0.24.zip）

- 在一台机器上进行的


## 配置

- 前提是 Apache 安装正确，启动正常

- 解压缩多个 tomcat，例如 `d:\tomcat_01`，`d:\tomcat_02`

- 配置 `Apache/conf/httpd.conf` 文件

找到如下信息，并去掉注释

```
#LoadModule proxy_module modules/mod_proxy.so
#LoadModule proxy_ajp_module modules/mod_proxy_ajp.so
#LoadModule proxy_balancer_module modules/mod_proxy_balancer.so
#LoadModule proxy_connect_module modules/mod_proxy_connect.so
#LoadModule proxy_ftp_module modules/mod_proxy_ftp.so
#LoadModule proxy_http_module modules/mod_proxy_http.so
...
#Include conf/extra/httpd-vhosts.conf
```

- 在 `Apache/conf/httpd.conf` 最后加上如下代码

```
ProxyRequests Off
<proxy balancer://cluster>
    BalancerMember ajp://127.0.0.1:8009 loadfactor=1 route=jvm1
    BalancerMember ajp://127.0.0.1:9009 loadfactor=1 route=jvm2
</proxy>
```

上面的 `BalancerMember` 成员是配置 tomcat 集群的

- 配置 `Apache/conf/extra/httpd-vhosts.conf` 文件

找到如下代码，将它们删除或者注释掉

```
<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.sm.com
    DocumentRoot "C:/Program Files (x86)/Apache Software Foundation/Apache2.2/docs/dummy-host.sm.com"
   ServerName dummy-host.sm.com
    ServerAlias www.dummy-host.sm.com
    ErrorLog "logs/dummy-host.sm.com-error.log"
    CustomLog "logs/dummy-host.sm.com-access.log" common
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host2.sm.com
    DocumentRoot "C:/Program Files (x86)/Apache Software Foundation/Apache2.2/docs/dummy-host2.sm.com"
    ServerName dummy-host2.sm.com
    ErrorLog "logs/dummy-host2.sm.com-error.log"
    CustomLog "logs/dummy-host2.sm.com-access.log" common
</VirtualHost>
```

- 在 `Apache/conf/extra/httpd-vhosts.conf` 文件最后加入如下代码

```
<VirtualHost *:80>
    ServerAdmin test@qq.com
    ServerName localhost
    ServerAlias localhost
    ProxyPass / balancer://cluster/
    ProxyPassReverse / balancer://cluster/
    ErrorLog "logs/dummy-host2.sm.com-error.log"
    CustomLog "logs/dummy-host2.sm.com-access.log" common
</VirtualHost>
```

域名与路径根据自己需要配置

- 配置 tomcat，修改 `Tomcat/conf/server.xml` 文件

> 说明，我只用了两个tomcat集群，修改第二个tomcat（两个tomcat任意设置一个）

```
<Server port="8005" shutdown="SHUTDOWN">  
```

将8005改为9005，防止与第一个冲突 

```
<Connector port="8080"
           protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443" />
```

将8080改为9080，将8443改为9443

```
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
```

将8009改为9009，将8443，改为9443

- 两个 tomcat 的 `Tomcat/conf/server.xml` 文件，均需要做如下改动

找到

```
<Engine name="Catalina" defaultHost="localhost">
```

改成  

```
<Engine name="Catalina" defaultHost="localhost"  jvmRoute="jvm2">
```

并在 `<Engine name="."..></Engine>` 标签中加上如下代码

```
<Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster" channelSendOptions="6">
    <Manager className="org.apache.catalina.ha.session.BackupManager" expireSessionsOnShutdown="false"
    notifyListenersOnReplication="true" mapSendOptions="6"/>
    <Channel className="org.apache.catalina.tribes.group.GroupChannel">
        <Membership className="org.apache.catalina.tribes.membership.McastService"
            address="228.0.0.4" port="45565" frequency="500" dropTime="3000"/>
        <Receiver className="org.apache.catalina.tribes.transport.nio.NioReceiver"
            address="auto" port="5002" selectorTimeout="100" maxThreads="6"/>
        <Sender className="org.apache.catalina.tribes.transport.ReplicationTransmitter">
            <Transport className="org.apache.catalina.tribes.transport.nio.PooledParallelSender"/>
        </Sender>
        <Interceptor className="org.apache.catalina.tribes.group.interceptors.TcpFailureDetector"/>
        <Interceptor className="org.apache.catalina.tribes.group.interceptors.MessageDispatch15Interceptor"/>
        <Interceptor className="org.apache.catalina.tribes.group.interceptors.ThroughputInterceptor"/>
    </Channel>
    <Valve className="org.apache.catalina.ha.tcp.ReplicationValve"
        filter=".*\.gif;.*\.js;.*\.jpg;.*\.png;.*\.htm;.*\.html;.*\.css;.*\.txt;"/>
    <Deployer className="org.apache.catalina.ha.deploy.FarmWarDeployer"
        tempDir="/tmp/war-temp/" deployDir="/tmp/war-deploy/" watchDir="/tmp/war-listen/" watchEnabled="false"/>
    <ClusterListener className="org.apache.catalina.ha.session.ClusterSessionListener"/>
</Cluster>
```

第一个tomcat配置为

```
<Engine name="Catalina" defaultHost="localhost" jvmRoute="jvm1">
```

改动 `Membership port` 的值与另一个设置为不同

改动 `Receiver port` 的值与另一个设置为不同

## 测试

所有配置已经完毕，我们现在可以进行测试

为了让效果更加明显，我们改动 `\tomcat_01\webapps\ROOT\index.html`，在 `<body></dody>` 中加上 `<h1>tomcat1</h1`

改动 `\tomcat_02\webapps\ROOT\index.html`，在 `<body></dody>` 中加上 `<h1>tomcat2</h1>`

在浏览器中输入 `http://localhost`，看看效果吧！刷新一下会有意外惊喜。