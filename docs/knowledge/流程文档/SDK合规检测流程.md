
import {WeChatLink, DocImage } from "/src/components/index.js"


对提测SDK的APK包体进行合规检测，合规检测部分共分为两部分测试。

1. 应用安全检测

2. 合规权限检测

## 合规权限检测

### 测试目的

检测应用程序在用户同意双协议前是否获得不合规的权限及用户信息。

### 测试环境搭建

在测试机下载并安装

[VirtualXposed.apk](https://qaq.com/static/public/SDK/%E5%90%88%E8%A7%84%E5%B7%A5%E5%85%B7/VirtualXposed_0.18.2.apk)

[Hooklogin.apk](https://qaq.com/static/public/SDK/%E5%90%88%E8%A7%84%E5%B7%A5%E5%85%B7/Hook_Plugin_1.6.1.apk)


### 测试步骤

1. 测试机打开VirtualXposed，应用需要获取手机权限，全部同意即可。

2. 点击“菜单”按钮

<DocImage src='sdkcheck/a89ac8d00e4a65e15bbd53b575a525e0.png'></DocImage>

3. 进入菜单页面，点击“添加应用”按键

<DocImage src='sdkcheck/18c7f678bf38a1fbf0c64d445780b667.png'></DocImage>

4. 选择测试机需检测的APP以及Hooklogin.apk，点击“安装”，选择“VirtualXposed”，等待安装成功。

<DocImage src='sdkcheck/866b021c3d25339f05052cef834308da.png'></DocImage>

5. 返回到步骤2）主界面，向上滑动屏幕，可以查看到已经安装成功的Hooklogin.apk以及测试APP。

<DocImage src='sdkcheck/9e9028cd9d8892552199f0369d888d96.png'></DocImage>

6. 启动顺序：Xposed installer-\>Hooklogin-\>测试APP。

注：此处步骤的APP不要杀进程，切到后台即可。

启动完成Hooklogin后可以先切回Xposed
installer进入日志清理日志，避免日志项过多，结果分析困难。

<DocImage src='sdkcheck/2aa76885a90bdc4200b672f7ade29f7b.png'></DocImage>

<DocImage src='sdkcheck/f475f3dd04c5081d819f2e50a06ad2a6.png'></DocImage>

清理完毕日志后在打开测试APP，停留5\~10秒，不进行任何操作，在切回Xpose日志界面，点击“重新载入”，访问权限日志结果项即可查看。

<DocImage src='sdkcheck/17d5a1bb942ddb35a2acc9ad5c85db01.png'></DocImage>

### 测试结果分析

点击“重新载入“后，出现测试APP在未进行任何操作前获取的合规权限，点击如图按钮可以将日志保存到手机中。

<DocImage src='sdkcheck/f58222188d822944703bbe120c0a1584.png'></DocImage>

到手机目标路径查看获取权限日志

<DocImage src='sdkcheck/948d0a878ec8b7b99dbd584019bc1451.png'></DocImage>

### 结果项比对

Android端合规权限

[Android采集个人用户行为权限.xlsx](https://qaq.com/static/public/SDK/%E5%90%88%E8%A7%84%E6%9D%83%E9%99%90%E6%96%87%E6%A1%A3/Android%E9%87%87%E9%9B%86%E4%B8%AA%E4%BA%BA%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E6%9D%83%E9%99%90.xlsx)

IOS端合规权限

[iOS涉及个人信息权限.xlsx](https://qaq.com/static/public/SDK/%E5%90%88%E8%A7%84%E6%9D%83%E9%99%90%E6%96%87%E6%A1%A3/iOS%E6%B6%89%E5%8F%8A%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E6%9D%83%E9%99%90.xlsx)


## 应用安全检测

### 测试目的

检测安装到测试装置上的应用程序是否为恶意或可疑，以免用户受到恶意程序、勒索程序等不受欢迎的应用程序影响。

### 测试环境搭建

测试工具：Sophos Intercept X for Mobile

工具下载途径：

Android端：谷歌商店

IOS端：Appstore

### 测试步骤

1. 测试机安装好测试包体

2. 打开Intercept X工具

3. 点击“应用安全”

<DocImage src='sdkcheck/891d3064a590d99565015d1f2179ea46.png'></DocImage>

4. 应用安全界面内点击“显示扫描详细信息”

<DocImage src='sdkcheck/78e6bc1ed4c946c73e66b8dafe8a26f0.png'></DocImage>

5. 点击“启动”，

<DocImage src='sdkcheck/b4d217b3e8a834e5b934c3ae5d55b0f9.png'></DocImage>

6. 等待扫描完成即可

<DocImage src='sdkcheck/a9d475df15f69404da16ecb2fbd48526.png'></DocImage>

### 测试结果分析

扫描完成后，查看测试包体是否存在安全隐患

若测试结果发现测试包体存在安全隐患，则检测结果未通过，将存在安全问题截图反馈到项目，并跟进问题改进到扫描通过。

<DocImage src='sdkcheck/7a20a0fb63919b4e4b6473dd33c0c8aa.png'></DocImage>

若测试结果未发现测试包体存在安全隐患，则测试结果通过。
