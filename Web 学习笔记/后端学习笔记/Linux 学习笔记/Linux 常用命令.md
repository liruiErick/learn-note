### Linux自带的包管理工具

RedHat 系列 
1 常见的安装包格式 rpm 包，安装rpm包的命令是“rpm -参数” 
2 包管理工具 yum 
3 支持tar包 

Debian 系列
1 常见的安装包格式 deb 包，安装deb包的命令是“dpkg -参数”
2 包管理工具 apt-get
3 支持tar包


### 常用操作命令

#### 取得管理员权限
sudo -s

#### 重启命令：
1、reboot
2、shutdown -r now 立刻重启(root用户使用)
3、shutdown -r 10 过10分钟自动重启(root用户使用)
4、shutdown -r 20:35 在时间为20:35时候重启(root用户使用)

#### 关机命令：
1、halt   立刻关机
2、poweroff  立刻关机
3、shutdown -h now 立刻关机(root用户使用)
4、shutdown -h 10 10分钟后自动关机

#### 查看硬盘使用情况
df -h