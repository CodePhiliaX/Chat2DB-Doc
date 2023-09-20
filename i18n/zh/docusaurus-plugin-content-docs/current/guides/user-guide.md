---
title: '使用教程'
sidebar_position: 3
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端和BI报表工具
---

# 使用教程

## 10分钟入门视频

<iframe src="//player.bilibili.com/player.html?aid=659372917&bvid=BV1yh4y1r7NF&cid=1223366275&page=1&autoplay=0" width="100%" height="500" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"  sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>
## 访问示例数据

打开Chat2DB，点击左侧的“连接”按钮，选择“示例数据库”，右键点击“连接”按钮或双击，即可连接到示例数据库。

⚠ 提示：访问示例数据需要可以连接公网，如果无法连接公网，忽略报错，删除示例数据直接连接自己内部数据库即可。

<a><img src="https://sqlgpt.cn/img/2.png" width="100%"/></a>

如图所示，Chat2DB已经连接到示例数据库，可以直接使用。
2、3代表数据库schema点击可以切换database。

4、5代表数据库表，点击可以查看表结构。

6、代表SQL控制台，新建可以打开新的控制台，在控制台可以对该数据库做操作。

<a><img src="https://sqlgpt.cn/img/4.png" width="100%"/></a>

点击左侧仪表盘按钮，可以查看示例报表功能

<a><img src="https://sqlgpt.cn/img/6.png" width="100%"/></a>

## 新建数据库连接

点击左侧“连接”按钮，点击右侧“新建链接”按钮，选择数据库类型，输入数据库连接信息，点击“连接”按钮即可连接数据库。

<a><img src="https://sqlgpt.cn/img/7.png" width="20%"/></a>
<a><img src="https://sqlgpt.cn/img/8.png" width="75%"/></a>

### 配置数据库信息

配置数据库连接信息，点击“测试连接”按钮，如果连接成功，点击“连接”按钮即可连接数据库。

<a><img src="https://sqlgpt.cn/img/9.png" width="100%"/></a>

### 驱动配置

链接数据库需要下载对应的驱动，如果驱动为空有两种方式配置驱动

1、如果可以链接公网，点击“下载驱动”按钮，下载驱动，然后点击选择驱动。

2、如果无法连接公网或者默认驱动不能适配你的数据库，可以在本地下载驱动，点击“上传驱动”按钮，选择驱动文件上传，上传成功后即可使用。

<a><img src="https://sqlgpt.cn/img/10.png" width="55%"/></a>
<a><img src="https://sqlgpt.cn/img/11.png" width="35%"/></a>

### 配置SSH隧道

如果数据库需要通过SSH隧道连接，可以选择使用SSH true 配置SSH隧道信息，点击“测试SSH隧道”按钮，如果连接成功，说明SSH可以链接。

<a><img src="https://sqlgpt.cn/img/12.png" width="100%"/></a>

### ⚠ 错误提示

如果连接失败，会有错误提示，可以根据错误提示进行排查，99%以上的问题都是都是配置错误，或者驱动版本不适配你的数据库版本，网上查询大部分都能解决。

如果仍然无法解决，查看详情后可以复制错误信息，在 GitHub 提交 issue，所有 issue 我们都会去看，提交 issue 是最有效的解决办法。

<a><img src="https://sqlgpt.cn/img/13.png" width="100%"/></a>

## 数据库管理

点击左侧第一个“数据库管理”按钮，可以查看已经连接的数据库。

2、3代表数据库schema点击可以切换database。

4、5代表数据库表，点击可以查看表结构。

6、代表SQL控制台，新建可以打开新的控制台，在控制台可以对该数据库做操作。

<a><img src="https://sqlgpt.cn/img/4.png" width="100%"/></a>
<a><img src="https://sqlgpt.cn/img/14.png" width="100%"/></a>

1、选中SQL，点击执行按钮，可以执行SQL。控制台下方会显示执行结果，可以分页查看结果，也可以导出结果。
2、选中SQL，点击格式化按钮，可以格式化SQL。
3、点击控制台保存按钮，可以保存SQL到本地，在左侧我的保存可以查看保存记录，下次打开可以直接打开。

## AI 配置

### 方式一 : ⚠  通过 Open AI key使用AI能力

⚠ 提示：使用 OpenAI Key 是客户端直接请求 OpenAI 的接口 ，Chat2DB 没有对使用 OpenAI 做任何限制，有异议直接看代码。
如果使用 OpenAI 遇到的错误 95% 都是 Open AI 限制导致的，Open AI 限制如下：

1、访问 OpenAI 需要能够科学上网，并且能够开启全局代理，很多科学上网不支持全局代理导致不可用。

2、大部分人都是通过某宝，或者其他平台买了一个 Key 用来访问 OpenAI，这些Key都是共享的，OpenAI 对 Key 有限制，如果某个 Key 被多人使用，Open AI会限制该Key的使用，导致使用不了。

Open AI官方限制文档：https://platform.openai.com/docs/guides/rate-limits/overview

<a><img src="https://sqlgpt.cn/img/15.png" width="80%"/></a>

如果以上问题你都已经解决，可以参考下面配置就可以使用 OpenAI了。


<a><img src="https://sqlgpt.cn/img/16.png" width="100%"/></a>

点击左下角设置--》自定义AI-->OpenAI，输入Open AI Key，点击保存即可。Api Host 一般不需要修改，如果你有私有部署的 OpenAI 代理，可以修改 Api Host。HTTP Proxy Host、HTTP Proxy Port 一般不需要填，如果你的网络需要代理才能访问 OpenAI，可以配置代理。


### 方式二: ✅ 通过 Chat2DB AI 使用 AI 能力（推荐）

Chat2DB AI 是 Chat2DB 自己实现的 AI，不需要科学上网。 通过扫描下方二维码，关注 Chat2DB 公众号，回复“AI”获取AI Key，然后在 Chat2DB 中配置 AI Key即可使用。

<a><img src="https://sqlgpt.cn/img/qrcode_for_gh_ad223b39df20_258.jpg" width="30%"/></a>

点击左下角设置--》自定义AI--> Chat2DB AI，输入AI Key，点击保存即可。

<a><img src="https://sqlgpt.cn/img/17.png" width="100%"/></a>

### 其他方式：也支持 AzureAI 或自定义 AI 

配置方式同上，只需要修改AI类型和AI Key即可。

## 使用 AI    

### 1、AI 生成SQL

在数据库管理中，选中数据库，新建SQL控制台，在控制台上方有一个输入框，输入你需要让AI帮你查询的数据回车，AI 会自动的在控制台生成你想要的SQL，点击执行按钮就可执行 SQL 控制台下方会显示你查询的结果。
<a><img src="https://sqlgpt.cn/img/18.png" width="100%"/></a>


### 2、SQL 解释

选中 SQL 右键 解释SQL，在右侧弹窗中 AI 即可对 SQL 解释生成内容。
<a><img src="https://sqlgpt.cn/img/21.png" width="100%"/></a>


### 3、SQL优化

选中 SQL 右键 优化SQL，在右侧弹窗中 AI 即可对 SQL 生成建议。

### 4、SQL转化

选中 SQL 右键 转化SQL，在右侧弹窗中 AI 即可对 当前 SQL 转换未其他数据库的 SQL 语法。 


## BI 报表

点击左侧第二个“仪表盘”按钮，可以查看已经创建的报表，单击切换即可看到相应的报表数据 。
<a><img src="https://sqlgpt.cn/img/19.png" width="100%"/></a>


点击"+"按钮可以新建报表，输入报表名称，点击保存，选中刚新建的仪表盘开始添加数据。

<a><img src="https://sqlgpt.cn/img/20.png" width="100%"/></a>
- 1、当前卡片选择数据源，可以选择已经连接的数据库。
- 2、输入该报表要查询的数据，AI 开始生成 SQL。
- 3、点击执行按钮返回数据格式。
- 4、选择报表格式，x坐标 y坐标。
- 5、点击保存卡片。
- 6、点击卡片下方"+"号，在当前报表继续添加卡片，步骤同上。


##  本地调试

- git clone 到本地

```bash
$ git clone git@github.com:chat2db/Chat2DB.git
```

- 前端调试

```bash
node版本必须为16及以上 
一定要用yarn
$ cd Chat2DB/chat2db-client
$ yarn
$ yarn run start:web
```

- 后端调试

```bash
$ cd ../chat2db-server
$ mvn clean install # 需要安装maven 3.8以上版本
$ cd chat2db-server/chat2db-server-start/target/
$ java -jar -Dloader.path=/lib -Dchatgpt.apiKey=xxxxx chat2db-server-start.jar  # 启动应用 chatgpt.apiKey 需要输入ChatGPT的key,如果不输入无法使用AIGC功能
```
