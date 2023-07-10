---
sidebar_position: 2
---

import {WeChatLink, DocImage } from "/src/components/index.js"

## 工具介绍

1. 51虚拟机

- 多系统、多应用同时运行工具，利用该工具可测试ACE防外挂中虚拟机闪退功能是否生效

2. GG修改器

- ACE防外挂中二选一黑样本之一，利用该工具可测试二选一、修改器、变速器功能是否生效

3. MuMu模拟器（环境搭建不做详解）

- 模拟器工具，推荐使用该模拟器，利用该工具可安装修改器等会对Android环境造成影响的软件，也可快速开启root环境，便于测试root闪退功能

4. Android kill

- 反编译、重签名工具，可使用该工具对apk包快速重签名，可用于测试证书闪退功能

5. RenderDoc

- 动态资源获取工具，使用该工具可动态获取游戏资源，可用于测试反资源动态提取工具闪退功能

6. IDA Pro

- 动态调试工具，可使用该工具对游戏进行动态调试，可用于测试反调试占位闪退功能

[工具包下载](https://qaq.com/static/public/safe/%E5%AE%89%E5%85%A8%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7v1.1.zip?download=true)   

## 环境搭建

### 51虚拟机

1. 安装

- 推荐使用真机进行安装，模拟器无法虚拟出真实Android环境
- 将apk移动到移动设备上，点击安装即可

2. 测试是否安装成功

- 点击运行51虚拟机，并添加游戏

<DocImage src='ace/image-20220920172803995.png'></DocImage>

<DocImage src='ace/image-20220920173119865.png'></DocImage>

- 添加成功后，51虚拟机桌面会出现该应用，

<DocImage src='ace/image-20220920173224824.png'></DocImage>

### GG修改器

1. 安装

- 使用模拟器安装，尽量避免使用真机进行外挂类测试
- 安装成功后桌面会出现两个GG修改器图标

<DocImage src='ace/image-20220920174957950.png'></DocImage>

2. 修改器配置

* 运行GG修改器，点击修改64位游戏

<DocImage src='ace/image-20220920175141237.png'></DocImage>

<DocImage src='ace/image-20220920175201755.png'></DocImage>

- 点击重新安装重命名的GG修改器

<DocImage src='ace/image-20220920175242062.png'></DocImage>

- 卸载原来GG修改器

<DocImage src='ace/image-20220920180000486.png'></DocImage>

<DocImage src='ace/image-20220920180019323.png'></DocImage>

3. 首次运行

- 设置模拟器为root

<DocImage src='ace/image-20220920180223380.png'></DocImage>

<DocImage src='ace/image-20220920180309046.png'></DocImage>

- 超级用户请求，点击允许

<DocImage src='ace/image-20220920180346013.png'></DocImage>

- 运行成功

<DocImage src='ace/image-20220920180456529.png'></DocImage>

- 左上角出现GG悬浮图标，说明启动成功

### Android Kill

1. 安装

- 直接解压缩，双击Androidkiller.exe即可运行

<DocImage src='ace/image-20220920182237338.png'></DocImage>

2. 环境配置

- 配置jdk

<DocImage src='ace/image-20220920182517883.png'></DocImage>

<DocImage src='ace/image-20220920182554376.png'></DocImage>

3. 开始使用

- 反编译apk

<DocImage src='ace/image-20220920182839827.png'></DocImage>

- 重签名

<DocImage src='ace/image-20220920183017516.png'></DocImage>

### Render Doc

1. 安装

- 直接安装即可

2. 环境配置

- 配置JDK和Android SDK
- [JDK安装教程](https://www.runoob.com/java/java-environment-setup.html)
- [Android SDK安装教程](https://blog.csdn.net/qq_52183856/article/details/123496936)

<DocImage src='ace/image-20220920184246698.png'></DocImage>

- 将安装目录填入即可

<DocImage src='ace/image-20220920184356672.png'></DocImage>

3. 首次连接

- 手机设备开启USB调试

- RenderDoc 正常显示设备即可

<DocImage src='ace/image-20220920185109193.png'></DocImage>

- 点击后会软件会自动使用adb命令为手机设备安装服务器端

<DocImage src='ace/image-20220920185249472.png'></DocImage>

- 手机设备弹出该页面，则安装成功

<DocImage src='ace/image-20220920185356874.png'></DocImage>

- 测试过程中，请勿杀死该进程

### IDA Pro

1. 安装

- 启动IDA Pro安装程序，开始安装IDA

<DocImage src='ace/image-20220921103303721.png'></DocImage>

- 同意用户协议

<DocImage src='ace/image-20220921103546307.png'></DocImage>

- 选择install python 2.7x64

<DocImage src='ace/image-20220921104025071.png'></DocImage>

- 输入密码：qY2jts9hEJGy

<DocImage src='ace/image-20220921104141587.png'></DocImage>

- 选择安装位置

<DocImage src='ace/image-20220921104210596.png'></DocImage>

- 选择桌面快捷方式

<DocImage src='ace/image-20220921104241362.png'></DocImage>

- 开始安装

<DocImage src='ace/image-20220921104303124.png'></DocImage>

- 等待安装完成

<DocImage src='ace/image-20220921104324823.png'></DocImage>

- 安装完成

<DocImage src='ace/image-20220921104348185.png'></DocImage>

2. 服务端配置

- 获取Android_server，在IDA安装目录找到dbgsrv目录下的android_server，根据设备选择合适的server
- 一般选择android_server64

<DocImage src='ace/image-20220921120743064.png'></DocImage>

- 将android_server文件移动到设备/data/local/tmp下，这里使用mumu模拟器
- 连接mumu模拟器，打开命令行，执行以下命令

``` 
abd devices #测试adb服务是否正常，若不正常请重启adb服务
	#重启服务
	adb kill-server
	adb start-server
#连接模拟器
adb connect 127.0.0.1:7555  #显示already connected to 127.0.0.1:7555即为成功
adb devices  #查看是否连接成功，出现127.0.0.1:7555  device 即为成功
```

<DocImage src='ace/image-20220921111452761.png'></DocImage>

- 传输文件，并授权，执行下列命令行

```
adb push android_server文件存放地址(文件拖进来即可) /data/local/tmp
adb shell  #进入模拟器文件管理系统
	su
	cd /data/local/tmp
	chomd 777 android_server64(文件名)
	ls -l  #校验文件权限为 -rwxrwxrwx即可
```

<DocImage src='ace/image-20220921122214745.png'></DocImage>

3. 校验环境是否搭建完成

- 移动设备端，执行下列命令，出现启动端口即为成功

```
#在/data/local/tmp 路径下执行server
root@x86_64:/data/local/tmp # ./android_server64
```

<DocImage src='ace/image-20220921141012531.png'></DocImage>

- PC端首次运行IDA Pro，双击运行软件，点击ok

<DocImage src='ace/image-20220921141103892.png'></DocImage>

- 选择support message，点击ok

<DocImage src='ace/image-20220921141229279.png'></DocImage>

- 同意用户协议

<DocImage src='ace/image-20220921141550716.png'></DocImage>

- 显示选择文件界面即可

<DocImage src='ace/image-20220921141625078.png'></DocImage>