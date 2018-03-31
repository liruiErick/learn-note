#安装

1. 通过包管理器安装

   brew

   `brew doctor`确认BREW在正常工作。

   `brew update`更新包。

   `brew install mysql` 安装MySQL。

   yum

   `yum list installed | grep mysql` 需要检测系统是否自带安装mysql

   `yum -y remove mysql-libs.x86_64` 如果发现有系统自带mysql，将其删除

   `yum -y instal mysql` 安装MySQL。

   `mysql.server start` 或者 `service mysqld start` 启动MySQL。

2. `mysql_secure_installation` 执行安全安装。

   这时会提示是否要设置密码

   ```shell
   VALIDATE PASSWORD PLUGIN can be used to test passwords
   and improve security. It checks the strength of password
   and allows the users to set only those passwords which are
   secure enough. Would you like to setup VALIDATE PASSWORD plugin?

   Press y|Y for Yes, any other key for No:y
   ```

   输入`y`后进行密码强度设置

   ```shell
   LOW    Length >= 8
   MEDIUM Length >= 8, numeric, mixed case, and special characters
   STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

   Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 
   ```

   选择一个强度级别后，进行密码设置

   ```shell
   New password: 

   Re-enter new password: 
   ```

   如果密码过于简单，会出现以下提示，询问你是否继续使用这个密码，确认即可

   ```shell
   Estimated strength of the password: 50 
   Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
   ```

   之后又会提示是否删除匿名账户，确认

   ```shell
   By default, a MySQL installation has an anonymous user,
   allowing anyone to log into MySQL without having to have
   a user account created for them. This is intended only for
   testing, and to make the installation go a bit smoother.
   You should remove them before moving into a production
   environment.

   Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
   ```

   然后还会询问是否禁止远程root登陆，确认

   ```shell
   Normally, root should only be allowed to connect from
   'localhost'. This ensures that someone cannot guess at
   the root password from the network.

   Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
   ```

   最后会询问是否删除掉MySQL默认提供的Test数据库，确认

   ```shell
   By default, MySQL comes with a database named 'test' that
   anyone can access. This is also intended only for testing,
   and should be removed before moving into a production
   environment.

   Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
   ```

   最最后，告诉你新的配置生效需要重载权限表，是否现在重载，确认！

   ```shell
   Reloading the privilege tables will ensure that all changes
   made so far will take effect immediately.

   Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
   ```

3. 最后测试一下登陆 `mysql -u root -p`

   ```shell
   Enter password: 
   Welcome to the MySQL monitor.  Commands end with ; or \g.
   Your MySQL connection id is 5
   Server version: 5.7.19 Homebrew

   Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

   Oracle is a registered trademark of Oracle Corporation and/or its
   affiliates. Other names may be trademarks of their respective
   owners.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

   mysql> 
   ```

   登陆成功。如果想退出数据库，可以使用以下命令

   ```shell
   mysql> exit
   Bye
   ```

4. 其他操作

   ```shell
   mysql.server start    # 1. 启动
   mysql.server stop     # 2. 停止
   mysql.server restart  # 3. 重启
   ```

**最后，推荐安装一个Mac下查看数据库的软件**

https://www.sequelpro.com/

用软件链接时会提示输入`Host`、`Username`、`Password`、`port`等，一般情况下都是默认值和之前设置的密码

```
Host: 127.0.0.1
Username: root
Password: 19841217
port: 3306
```

如果不对，可以用命令行链接上数据库以后，通过一下命令查询详细数据

```shell
mysql> show variables;
```

**注意，数据库语句结束后一定要加 `;`**