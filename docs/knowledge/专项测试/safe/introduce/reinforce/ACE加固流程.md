---
sidebar_position: 3
---

 import { DocImage } from "/src/components/index.js"

加固前请确认已申请ACE加固，申请流程见：[ACE申请流程 | QAQ (bilibili.co)](https://qaq.com/docs/services/solution/flow/ACE接入流程)

## ACE加固官方文档

[ACE官方加固指引（国内）](https://www.anticheatexpert.com/#/doc-center/0dfeaa7fe86a5a80953c1228dcb7cc5545ca4004)

[ACE官方加固指引（海外）](https://intl.anticheatexpert.com/#/doc-center/0dfeaa7fe86a5a80953c1228dcb7cc5545ca4004)

## ACE加固工具下载

[ACE官方加固工具中心（国内）](https://www.anticheatexpert.com/#/tool-center)

[ACE官方加固工具中心（海外）](https://intl.anticheatexpert.com/#/tool-center)

1. 下载对应系统的加固工具

- 选择对应开发环境
- 选择关联项目
- 选择发行地区
- 勾选《服务条款》和《隐私条款》后点击确认即可下载

<DocImage src='ace/image-20220826184015477.png'></DocImage>

2. 注意事项

- 下载加固工具前请确认已申请加固服务，否则加固会失败
- 具体申请流程请参考[ACE申请流程](https://qaq.com/docs/services/solution/flow/ACE接入流程)

## ACE命令行加固步骤

### 前期准备

1. 解压工具包，解压路径确保不含中文

- 查看当前系统处理器类型，选择对应类型解压（mac无需选择）

<DocImage src='ace/image-20220826185609581.png'></DocImage>

2. 赋权（MAC系统）

- 在MAC系统和Linux系统上调用工具前，请首先为工具赋权，进入MTPClientConsole.exe所在目录，执行：
```
chmod -R 777 ./*
```

3. tpshell-config.xml配置文件的写法<a id="config"></a>

- 配置详情请参考：[官方tpshell-config配置文件说明](https://www.anticheatexpert.com/#/doc-center/0dfeaa7fe86a5a80953c1228dcb7cc5545ca4004)

4. 常见返回结果

| 参数                           | 含义           |
| :----------------------------- | :------------- |
| The shelling task was finished | 加固任务完成   |
| Shell failed for time out      | 加固超时失败   |
| Configuration error            | 配置解析错误   |
| Command line parameter error   | 命令行参数错误 |
| Shelling error                 | 加壳错误       |
| Local client error             | 本地客户端错误 |
| erver error                    | 服务器错误     |

5. **注意事项**

- 配置tpshell-config.xml文件时，需对assets/distributor.txt添加白名单；
- 使用签名平台对包体进行签名时，会更改assets文件下的distributor.txt文件；
- 若未对该文件设立白名单，会导致在签名后，因修改包内资源文件，触发ACE加固中的文件校验策略，导致无法正常进入游戏；
- 添加白名单后，对于白名单内的文件，当做出修改或删除操作时，将不再触发ACE资源文件校验。

<DocImage src='ace/image-20220927155419977.png'></DocImage>

### 加固命令行

[最新版加固操作指引(国内)](https://www.anticheatexpert.com/#/doc-center/0dfeaa7fe86a5a80953c1228dcb7cc5545ca4004)

[最新版加固操作指引(海外)](https://intl.anticheatexpert.com/#/doc-center/0dfeaa7fe86a5a80953c1228dcb7cc5545ca4004)

1. APK加固

- APK加固会生成.apk为后缀的文件

- 执行以下命令行 ：

```
cd MTPClientConsole.exe所在目录
MTPClientConsole.exe -d <gameId> <apkpath> <outDir> <certPath> -c 
        <configPath> [-s <symbolpath>]
```

- 参数说明

| 参数       | 含义                                                         |
| :--------- | :----------------------------------------------------------- |
| -d         | 标准版（默认选项，不可变更）                                 |
| gameId     | 游戏ID（控制台注册，可前往控制台查看）                       |
| apkPath    | 待加固的apk文件完整路径（不要包含中文字符）                  |
| outDir     | 输出加固后apk文件完整目录（不要包含中文字符）                |
| certPath   | 与游戏ID对应的证书路径（证书名为Game_ID.cert且不要包含中文字符） |
| -c         | 调用配置文件（默认选项，不可变更）                           |
| configPath | tpshell-config.xml配置文件的路径（不要包含中文字符），配置文件中成对的标签需放在同一行且文件名称以.xml结尾，具体配置详情请参考[配置文件的写法](#config) |
| -s         | 调用配置文件（选填），支持global-metadata.dat运行时解密和Unity资源文件加密功能 |
| symbolpath | 可参考[global-metadata.dat文档](https://www.anticheatexpert.com/#/doc-center/d144163534f6e0231c4a44ec36f465d59d061a52)或[unity AB资源加密文档](https://www.anticheatexpert.com/#/doc-center/ef679ed41c183d469d8eef6f910fb3e8a77991c1)（不要包含中文字符） |

2. 加固（APP Bundle加固）

- APP Bundle加固会生成以.aab为后缀的文件
- 执行下列命令行：

```
cd MTPClientConsole.exe所在目录
MTPClientConsole.exe -a <gameId> <aabPath> <outDir> <certPath> -c
	<configPath> [-s <symbolpath>]
```

- 参数说明

| 参数       | 含义                                                         |
| :--------- | :----------------------------------------------------------- |
| -a         | AppBundle版（默认选项，不可变更）                            |
| gameId     | 游戏ID（控制台注册，可前往控制台查看）                       |
| aabPath    | 待加固的aab文件完整路径（不要包含中文字符）                  |
| outDir     | 输出加固后aab文件完整目录（不要包含中文字符）                |
| certPath   | 与游戏ID对应的证书路径（证书名为Game_ID.cert且不要包含中文字符） |
| -c         | 调用配置文件（默认选项，不可变更）                           |
| configPath | tpshell-config.xml配置文件的路径（不要包含中文字符），配置文件中成对的标签需放在同一行且文件名称以.xml结尾 |
| -s         | 调用配置文件（选填），支持global-metadata.dat运行时解密和Unity资源文件加密功能 |
| symbolpath | 可参考[global-metadata.dat文档](https://www.anticheatexpert.com/#/doc-center/d144163534f6e0231c4a44ec36f465d59d061a52)或[unity AB资源加密文档](https://www.anticheatexpert.com/#/doc-center/ef679ed41c183d469d8eef6f910fb3e8a77991c1)（不要包含中文字符） |

### 加固效果

1. 判断包体是否加固

- 查看安装包内lib目录对应架构目录下是否存在libtprt.so文件（海外版为libanort.so）；若存在说明安装包已加固；

2. 加固闪退验证步骤（未添加配置文件白名单）

```
apktool d apkPath; # 使用apktool解压apk文件
apktool b apkPath; # 使用apktool重打包apk文件
apk重签名后安装运行游戏，加固都会立即退出游戏
```

3. 判断加固包闪退

- 查看logcat信息中存在cleanly(1-30)的信息，例如：Process 15407 exited cleanly (30)

```
adb shell
su
logcat d|grep "cleanly"
```