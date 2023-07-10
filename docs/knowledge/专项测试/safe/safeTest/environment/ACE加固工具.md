---
sidebar_position: 1
---

import {WeChatLink, DocImage } from "/src/components/index.js"

## 工具介绍

1. apktool

- 反编译工具，利用java环境使用apktool.jar完成对apk包的反编译

2. Beyond Compare 4

- 文件比较工具，对反编译后的文件夹进行对比

3. AssetStudioGUI

- Unity AB资源反编译工具，测试是否对AB资源进行加密

4. Charles 

- 抓包、协议获取工具，测试协议是否加密

[工具包下载](https://qaq.com/static/public/safe/%E5%AE%89%E5%85%A8%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7v1.1.zip?download=true)   

## 环境搭建

### apktool

1. [java环境配置](https://www.runoob.com/java/java-environment-setup.html)
2. apktool环境变量配置

* 将apktool文件夹解压，解压路径不要包含中文

<DocImage src='ace/image-20220920104355850.png'></DocImage>

* 点击进入apktool文件夹，并复制路径

<DocImage src='ace/image-20220920104454222.png'></DocImage>

- 打开编辑系统环境变量，并添加path

<DocImage src='ace/image-20220920104642147.png'></DocImage>

3. 测试环境是否搭建成功

- 桌面进入cmd窗口，执行apktool，出现下图则环境搭建成功

<DocImage src='ace/image-20220920105021667.png'></DocImage>

### Beyond Compare 4

1. 安装

- 双击运行安装程序

<DocImage src='ace/image-20220920110219691.png'></DocImage>

- 点击下一步

<DocImage src='ace/image-20220920110653981.png'></DocImage>

- 选择为所有用户安装

<DocImage src='ace/image-20220920110731400.png'></DocImage>

- 选择接收协议

<DocImage src='ace/image-20220920110816297.png'></DocImage>

- 选择安装环境

<DocImage src='ace/image-20220920110853491.png'></DocImage>

- 附加任务全选

<DocImage src='ace/image-20220920110912840.png'></DocImage>

- 点击安装

<DocImage src='ace/image-20220920110954151.png'></DocImage>

- 等待安装完成即可

<DocImage src='ace/image-20220920111038995.png'></DocImage>

<DocImage src='ace/image-20220920111102375.png'></DocImage>

2. 测试环境是否搭建成功

- 选择文件夹比较

<DocImage src='ace/image-20220920111515316.png'></DocImage>

- 输入路径开始比较

<DocImage src='ace/image-20220920111948802.png'></DocImage>

- 可正常显示比较的文件夹即可

### AssetStudioGUI

1. 安装

- 无需安装，解压缩即可
- 双击运行

<DocImage src='ace/image-20220920114500871.png'></DocImage>

- 可建立桌面快捷方式

<DocImage src='ace/image-20220920114731909.png'></DocImage>

2. 测试环境是否搭建成功

- 双击运行软件

- 选择assets文件夹

<DocImage src='ace/image-20220920115337542.png'></DocImage>

<DocImage src='ace/image-20220920115415061.png'></DocImage>

- 出现进度条即可

<DocImage src='ace/image-20220920115453599.png'></DocImage>

### Charles 抓包工具

1. 安装

- 双击运行，选择默认安装即可

<DocImage src='ace/image-20220920140817120.png'></DocImage>

2. 导入证书-PC端

- 为电脑安装证书

<DocImage src='ace/image-20220920141221921.png'></DocImage>

- 点击安装证书

<DocImage src='ace/image-20220920141312652.png'></DocImage>

- 选择安装用户，当前用户、本计算机均可
- 选择证书存储

<DocImage src='ace/image-20220920141541536.png'></DocImage>

3. 端口和其他配置

- 设置端口为8888

<DocImage src='ace/image-20220920143823694.png'></DocImage>

<DocImage src='ace/image-20220920143906811.png'></DocImage>

- 选择绕过PC端，不抓取PC端协议

<DocImage src='ace/image-20220920151707540.png'></DocImage>

- 设置使用证书解析<a id="sslpro"></a>

<DocImage src='ace/image-20220920151902522.png'></DocImage>

<DocImage src='ace/image-20220920152114664.png'></DocImage>

4. 连接PC

- 查看PC端ip和端口

<DocImage src='ace/image-20220920144218734.png'></DocImage>

- 移动设备连接WiFi(bilibili-office-mobile)，并设置代理

<DocImage src='ace/image-20220920144727120.png'></DocImage>

- 首次连接，会弹出提示，选择Allow即可

<DocImage src='ace/image-20220920145128426.png'></DocImage>

5. 导入证书-移动端

- Charles中点击为移动设备安装证书

<DocImage src='ace/image-20220920143042044.png'></DocImage>

<DocImage src='ace/image-20220920143055277.png'></DocImage>

- 移动端设置代理后访问 chls.pro/ssl 下载证书

<DocImage src='ace/image-20220920150129333.png'></DocImage>

<DocImage src='ace/image-20220920150145315.png'></DocImage>

- 安装证书，进入下载列表，点击下载后的证书即可，不同手机设备步骤不同，这里以三星手机为例

<DocImage src='ace/image-20220920150356148.png'></DocImage>

- 出现已安装标识即安装成功

<DocImage src='ace/image-20220920150451462.png'></DocImage>

6. 测试环境是否搭建成功

- 获取到报文信息即为成功

<DocImage src='ace/image-20220920152246867.png'></DocImage>

