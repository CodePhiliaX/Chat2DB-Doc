

# 本地构建
echo "开始本地构建..."
npm run build

# 检查构建是否成功
if [ $? -ne 0 ]; then
    echo "构建失败，部署终止"
    exit 1
fi

echo "构建成功，准备传输文件到国外服务器..."
scp -r .next package.json package-lock.json root@47.89.251.23:/root/Chat2DB-Doc



# ssh到服务 重启