#! /bin/bash

git reset --hard origin/master # 强制将远程master覆盖本地master（这里的远程master是fetch之前的本地保存版本，不一定是实际的远程最新代码）
git clean -f                   # 清理没有被追踪的文件
git pull origin master         # 拉取远程仓库的最新代码
npm install                    # 重新安装 npm 依赖
npm run test                   # 测试项目
npm run start                  # 运行项目