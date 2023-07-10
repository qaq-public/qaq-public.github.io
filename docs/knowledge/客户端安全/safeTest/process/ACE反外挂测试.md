---
sidebar_position: 2
---

import { DocImage } from "/src/components/index.js"

测试前请验证待测试包MD5码和版本号与提测信息一致，以及是否能正常运行

测试过程中请勿修改ACE后台功能开启状态

反外挂测试环境准备： [反外挂测试工具](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE反外挂工具)

## Android防外挂测试流程

### 防外挂接入检查

- [虚拟机](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE反外挂工具#51虚拟机)安装测试包体，并运行游戏（需完成登录）
- 前往[数据查询页面](https://www.anticheatexpert.com/#/console/service/query-data)

<DocImage src='ace/image-20220908105001770.png'></DocImage>

- 查看防御类型为虚拟机的数据（一般会有5分钟数据延迟）

<DocImage src='ace/image-20220908113018442.png'></DocImage>

- 若可查询到当前设备产生的虚拟机打击数据，则SDK接入成功，否则接入失败

<DocImage src='ace/image-20220908113541293.png'></DocImage>

- 若接入成功，则测试下列测试项；否则，前往 [官方文档 ](https://www.anticheatexpert.com/#/doc-center/a9216d0754927abc46e65b5409a32f5d0683b16d)，查询未成功接入缘由并反馈项目组

### 二选一检测

- 设备环境-已安装[GG修改器](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE反外挂工具#gg修改器)
- ACE后台二选一弹框功能保持开启
- 安装测试包体
- 开启游戏并登录后，等待大约3~5分钟，若出现ACE弹窗，则验证成功

<DocImage src='ace/image-20220901183124662.png'></DocImage>

### 变速器、修改器闪退

- 开启待测试项目APP
- ACE后台变速器、修改器闪退功能保持开启
- 切换至GG修改器，并选择待测试项目

<DocImage src='ace/image-20220901185638572.png'></DocImage>

- 点击设置，开始跳帧

<DocImage src='ace/image-20220901185718798.png'></DocImage>

<DocImage src='ace/image-20220901185800214.png'></DocImage>

- 若游戏闪退或修改无效，测试通过，否则测试不通过
- 点击修改内存

<DocImage src='ace/image-20220901191211118.png'></DocImage>

- 选择搜索到的值，例如金钱、经验等

<DocImage src='ace/image-20220901191435398.png'></DocImage>

- 依次修改值

<DocImage src='ace/image-20220901191916716.png'></DocImage>


<DocImage src='ace/image-20220901191902542.png'></DocImage>

- 若修改失败或游戏闪退，则测试通过，否则测试不通过

### 虚拟机闪退

- ACE后台虚拟机闪退功能保持开启

- 将待测试包体安装至51虚拟机

<DocImage src='ace/image-20220902100335563.png'></DocImage>

- 点击安装包选择待测试的包，点击加入

<DocImage src='ace/image-20220902100418383.png'></DocImage>

- 加入成功后点击启动，虚拟机内打开游戏运行

<DocImage src='ace/image-20220902100450691.png'></DocImage>

- 51虚拟机闪退，则测试通过；否则测试不通过

### root弹窗闪退

- ACE后台Root弹窗闪退功能保持开启
- 模拟器开启root，这里以mumu模拟器作为示例

<DocImage src='ace/image-20220902101041901.png'></DocImage>

- 安装包体，并运行游戏

<DocImage src='ace/image-20220902101244931.png'></DocImage>

- 若游戏弹窗，并点击确认后游戏闪退，则测试通过；否则测试不通过

### Frida本地扫描、反Frida调试

- 当前功能默认开启，确认未被关闭即可
- 该项测试可与安全检测平台结合，安全平台详情如下：[平台检测](https://qaq.com/docs/help/services/safe/safeTest/process/安全检测平台测试)

- 进入检测详情后，点击风险漏洞

<DocImage src='ace/image-20220902102431933.png'></DocImage>

- 快捷键 Ctrl + F ，搜索网页内容Hook

<DocImage src='ace/image-20220902113143398.png'></DocImage>

- 若Hook调试风险检测结果为安全，则测试通过；否则测试不通过

### 破解证书闪退

<a id="decompression"></a>

- 加固包去签名以及重新打包 ([apktool工具](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE加固工具#apktool))

```
1.apktool d xxx_shell.apk #解包
2.apktool b xxx_shell     #出包
3.重签名
```

- 解包：在包体同级目录生成与包名xxx_shell.apk一致的文件夹xxx_shell

<DocImage src='ace/image-20220902114011242.png'></DocImage>

<DocImage src='ace/image-20220902114034347.png'></DocImage>

- 出包：在解包生成文件下的dist目录下生成xxx_shell.apk

<DocImage src='ace/image-20220902114321961.png'></DocImage>

<DocImage src='ace/image-20220902114609467.png'></DocImage>

- 重签名：使用重签名工具对重新出包后的包体xxx_shell.apk进行签名
- 双击运行软件[Android Killer](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE反外挂工具#android-kill)，点击工具

<DocImage src='ace/image-20220902114948867.png'></DocImage>

- 点击APK 签名

<DocImage src='ace/image-20220902115014549.png'></DocImage>

- 选择待签名的apk包和签名
- 签名选择AndroidKiller ，也可自行添加签名文件，详情见[ACE 反外挂环境配置](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE反外挂工具)

<DocImage src='ace/image-20220902120008876.png'></DocImage>

- 执行后会在dist目录下生成新包xxx_shell_sign.apk，并安装该包体

<DocImage src='ace/image-20220902135732532.png'></DocImage>

- 查看ACE后台破解证书开关：

1. 若已开启非正版打击模式，则游戏闪退为测试通过，否则不通过
2. 若已开启盗版打击模式，添加当前证书为盗版证书

<a id="Crack"></a>

- 添加盗版证书

<DocImage src='ace/image-20220902140301508.png'></DocImage>

- 点击证书MD5查询，需先解压缩重签名包体，解包同上：[解包命令](#decompression)

<DocImage src='ace/image-20220902140412208.png'></DocImage>

- 选择解压文件下original -> META-INF -> xxx.RSA文件，不同包体RAS文件存放位置可能会存在差异，可直接搜索.RAS
- 选择后，自动进入搜索，将搜索到的标记为盗版

<DocImage src='ace/image-20220902144011219.png'></DocImage>

- 进入游戏，若游戏闪退，则测试通过，否则测试不通过

3. 若未开启破解证书，需开启后台功能盗版打击模式，并添加盗版证书，详情见上述：[破解证书添加](https://qaq.com/docs/help/services/safe/safeTest/process/ACE反外挂测试#Crack)

<DocImage src='ace/image-20220902144755004.png'></DocImage>

- 测试前需确认开关后台功能是否影响游戏正常运行
- 测试完成后需恢复原ACE后台功能开关状态

### 反资源动态提取

- 安装未加固包至手机真机
- 手机连接电脑，并开启usb调试模式
- 双击运行PC端[Rrenderdoc](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE反外挂工具#render-doc)软件
- 为手机设备安装客户端

<DocImage src='ace/image-20220902150001219.png'></DocImage>

- 点击后，PC通过adb自动为手机设备安装客户端，手机设备出现下图即为安装成功

<DocImage src='ace/image-20220902150153671.png'></DocImage>

- 选择待调试游戏包名+启动类

<DocImage src='ace/image-20220902150455769.png'></DocImage>

<DocImage src='ace/image-20220902150514668.png'></DocImage>

- 点击Launch进入

<DocImage src='ace/image-20220902150624567.png'></DocImage>

- 若弹出错误弹窗，点击黄色区域，会自动生成debug包

<DocImage src='ace/image-20220902150827703.png'></DocImage>

<DocImage src='ace/image-20220902152636720.png'></DocImage>

- 等待一段时间后，点击Launch成功进入xxx节点

<DocImage src='ace/image-20220902153903295.png'></DocImage>

- 点击获取，若游戏闪退或调试设备显示not presenting ，则测试通过，否则不通过

### 主动防御-反调试

- 开启mumu模拟器（环境已配置完成），并安装游戏包
- PC端命令

```
adb kill-server  
adb connect 127.0.0.1:7555    #显示already connected to 127.0.0.1:7555即为成功
adb devices     #可查询到127.0.0.1:7555  device 即可
adb shell   
/# su
/# cd /data/local/tmp   #存放客户端android_server64所在目录
/data/local/tmp/# ls
/data/local/tmp/#  ./android_server64   运行客户端
```

- 效果图如下

<DocImage src='ace/image-20220902155928362.png'></DocImage>

- 新建命令行窗口（原窗口不关闭）

```
adb forward tcp:23946 tcp:23946   #设置代理
```

<DocImage src='ace/image-20220902162649775.png'></DocImage>

- 双击运行[IDA pro](https://qaq.com/docs/help/services/safe/safeTest/environment/ACE反外挂工具#ida-pro)，开启调用模式

<DocImage src='ace/image-20220902162749617.png'></DocImage>

- 选择主机号和接口，一般为127.0.0.1:23946

<DocImage src='ace/image-20220902163025569.png'></DocImage>

- 选择待测试应用

<DocImage src='ace/image-20220902163014496.png'></DocImage>

- 点击ok后等待调试

<DocImage src='ace/image-20220902163155933.png'></DocImage>

<DocImage src='ace/image-20220902163205893.png'></DocImage>

- 若出现无响应弹窗或IDA提示调试失败，则测试通过，否则不通过

