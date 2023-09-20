---
title: 'UserGuide'
sidebar_position: 3
description: Chat2DB is a database client and BI reporting tool that integrates AI capabilities and supports management of various databases including MySQL, Oracle, etc.
---

# User Guide

## 10-minute Quick Start Video

Coming soon

## Access the DEMO Database

Open Chat2DB client, click the "Connections" button on the left, select "DEMO Database", right-click the "Connect" button or double-click to connect to the DEMO database.

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/f61528de-e1a7-4e3d-9801-a19609b68c4f.png#30" width="100%" />
⚠ Tips: Accessing the DEMO data requires an internet connection. If you cannot connect to the internet, ignore the error and delete the DEMO data. Then connect to your own database.

As shown in the image below, Chat2DB has connected to the DEMO database and can be used directly. The block 2 and 3 represent database schemas, you can click there to switch databases. The block 4 and 5 show the database tables, you can click here to view table structures. The block 6 can add a new console where you can execute sql on your database.

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/92447ccc-e049-4781-8406-0f8a57c07d7c.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%" />

Click the dashboard button on the left to view the dashboard features

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/6987eb57-7cd4-4b4f-a959-0ed178f7927c.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%" />


## Datasource Management
Click the "Connection" button on the left and select your database type when you add new connection.

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/2289a2b0-786c-4847-a0a7-6643985b8f89.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%" /> 


### Configure Database Connection
Configure the database connection, click the "Test" button. If the connection is successful, click the "Save" button to save the connection. Then double click the connection to connect to your database.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/a32ce1d8-e9af-4ae7-8eb8-b3c13e5b15f9.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>

### Configure Database Driver

Connecting to a database requires downloading the corresponding driver. If the driver is empty, there are two ways to configure the driver:

1. If you can connect to the internet, click the "Download Driver" button to download the driver, then choose the driver.
2. If you cannot connect to the internet or the default driver does not match your database, you can download the driver manually. Click the "Upload Driver" button, select the driver file to upload. You can use your local driver after uploading.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/892f35f0-13c7-46a4-a918-bed01acac40c.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>
<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/06ecf057-12cc-4186-9044-bb3436a3845d.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>
<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/0f802663-2705-4be6-bbde-92903aaef6bd.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>

### Configure SSH Tunnel
If the database needs to be connected via an SSH tunnel, set "Use SSH" as true to configure SSH tunnel. Then click the "Test the SSH Tunnel" button, you can connect to your database via ssh after the test is successful.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/59fada22-82be-47e6-9190-4e4d85b5a22c.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>

### ⚠ Error Prompts

If the connection fails, there will be error prompts. You can troubleshoot based on the error prompts. 99%+ of issues are configuration errors or driver version mismatches with your database version. Most can be resolved by searching online.

If you still cannot resolve the issue, copy the error details and submit an issue on GitHub. We will check all the issues regularly, so submitting an issue is the most effective way to resolve problems.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/8f4e8869-bab5-4de3-bd7f-17f322db9d3b.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>

## Database Management
Click the first button on the left to view the connected databases. The block 2 and 3 represent database schemas, you can click here to switch databases. The block 4 and 5 represent database tables, click table to view table structures. Click button in block 6 can create a new SQL console where you can perform operations on the database.

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/92447ccc-e049-4781-8406-0f8a57c07d7c.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%" />

Select the SQL in the console, then you can click the "Run" button to execute the SQL. The bottom of console will display the execution results, you can page through the results or export them. Also, you can click the Format button to format the selected SQL.
Meanwhile, you can click the "Save" button in the console to save the SQL. Then you can view saved records in the block "Saved" and directly open them next time.

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/8f48a0d6-9a8c-43c5-8f77-5a40156cb708.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%" />

## AI Management

### Option1 : ⚠  Use AI through OpenAI key

⚠ Tips: Using the OpenAI key makes direct requests to the OpenAI API. Chat2DB does not limit the use of OpenAI, if you have any objections you can review the code directly.
If you encounter errors using OpenAI, 95% are due to OpenAI restrictions:

Accessing OpenAI requires being able to bypass the firewall and enable global proxies. Many proxy tools do not support global proxies which lead AI to not work. Please troubleshoot your proxy by yourself.
Most people buy a shared key on Taobao or other platforms to access OpenAI which were restricted - if multiple people use the same key, OpenAI will limit its usage.
Please refer the OpenAI official document here: https://platform.openai.com/docs/guides/rate-limits/overview

<img src="https://sqlgpt.cn/img/15.png" width="80%" />

If you have resolved the above issues, you can follow the below steps to configure and use OpenAI.

Click Settings in the lower left corner --> Custom AI --> OpenAI, enter the OpenAI key and click Save. The API Host usually does not need to be configured. If you have a private OpenAI proxy, you can modify the API Host. HTTP Proxy Host and HTTP Proxy Port are usually not needed, configure them if your network needs a proxy to access OpenAI.

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/490388bb-08c5-4da1-a2d6-b10354e02e05.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%" />


### Option2: ✅ Use AI through Chat2DB AI (recommended)
Chat2DB AI does not require bypassing the firewall. Scan the QR code below to follow the Chat2DB Official Account, reply "AI" to get an AI key, then configure it in Chat2DB to use AI capabilities.

<img src="https://sqlgpt.cn/img/qrcode_for_gh_ad223b39df20_258.jpg" width="30%" />

Click Settings in the lower left corner --> Custom AI --> Chat2DB AI, enter the AI key and click Save.

<img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/7b70c07e-505f-48f8-8160-e52b9debe336.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%" />


### Other options: 

We also support AzureAI or custom AI. The configuration is similar, just modify the AI type and key.

## Using AI    

### 1、AI generates SQL

In Database Management -> select the database -> create a new SQL console. There is an input box above the console, enter the natural language that you want AI to generate, then press Enter button. AI will automatically generate the SQL you wanted in the console. Click the Execute button to execute it. The results will display on the bottom of the console, you can page through them or export them.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/15f7ea49-d5e0-443a-8d18-fad4791d8b3c.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>


### 2、Explain SQL

Right-click the selected SQL -> click Explain SQL. AI will explain the SQL in the popup window on the right of the console.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/d27e6232-9aba-4d48-bc74-72768d6ad6a4.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>


### 3、Optimize SQL

Right-click the selected SQL -> click Optimize SQL. AI will generate suggestions in the popup window.

### 4、Convert SQL

Right-click the selected SQL -> click Convert SQL. AI will convert the current SQL syntax to another database syntax in the popup window.

## BI Reports Dashboard

Click the second button on the left to view created reports. Click the report and view the corresponding data.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/16f7ae19-7bae-404f-9d1b-2cb4fd266526.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>

Click the "+" button to create a new dashboard -> enter the dashboard name -> click Save. Then select the newly created dashboard to start editing data.

<a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/a2529bce-220e-4300-b667-fccaf767cda6.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>

- 1、Select the data source for the current chart which you can choose from the connected databases.
- 2、Enter the data to query for this report chart, AI will start generating the SQL.
- 3、Click the "Run" button to return the data format.
- 4、Select the chart type, x axis and y axis.
- 5、Click "Confirm" button to save the current chart.
- 6、Click the "+" under the chart to continue adding chart to the current report dashboard.
  <a><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJdYA60Y7n3p8/img/01971e48-9b44-4fc9-be46-fdaf4ad84390.png?x-oss-process=image/resize,w_1280,m_lfit,limit_1" width="100%"/></a>


##  Local Debugging

- git clone to your local repository

```bash
$ git clone git@github.com:chat2db/Chat2DB.git
```

- Frontend debugging

```bash
Node version must be 16+
Execute below command to install nodejs
$ cd Chat2DB/chat2db-client
$ yarn
$ yarn run start:web
```

- Backend debugging

```bash
$ cd ../chat2db-server
$ mvn clean install # Requires maven 3.8+
$ cd chat2db-server/chat2db-server-start/target/
$ java -jar -Dloader.path=/lib -Dchatgpt.apiKey=xxxxx chat2db-server-start.jar  # 启动应用 chatgpt.apiKey 需要输入ChatGPT的key,如果不输入无法使用AIGC功能
```
