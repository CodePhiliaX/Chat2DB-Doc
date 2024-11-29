# 依赖安装
pnpm i

# 本地构建
echo "开始本地构建..."
npm run build

# 检查构建是否成功
if [ $? -ne 0 ]; then
    echo "构建失败，部署终止"
    exit 1
fi

echo "构建成功"

# 压缩 .next 目录和 public  文件夹
echo "压缩 .next 目录和 public  文件夹..."
tar -czf deploy.tar.gz .next public 

echo "传输文件到国外服务器..."
scp deploy.tar.gz package.json package-lock.json root@47.89.251.23:/root/Chat2DB-Doc

echo "在国外服务器上解压文件, 并重启服务"
ssh root@47.89.251.23 "cd /root/Chat2DB-Doc && rm -rf .next && tar -xzvf deploy.tar.gz --warning=no-unknown-keyword && pm2 restart Chat2DB-Doc"
