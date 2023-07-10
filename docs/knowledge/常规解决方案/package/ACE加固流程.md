# ACE加固流程
import { DocImage } from "/src/components/index.js"

## ACE接入官方文档

[官方链接](https://www.anticheatexpert.com/#/doc-center/47019c9bb902d424632782311957ec29073f3ec4)

## ACE加固工具

官网申请试用后可以下载到最新工具包

## ACE命令行加固流程

1、将要加固的apk放至脚本同层文件夹

2、在该文件夹下打开命令窗口，输入以下指令

./MTPClientConsole.exe -d gameId apkpath outDir certPath -c configPath

gameID：要加固的游戏的ID（单独的）

apkpath：要加固的apk路径

outDir：生成的后的apk路径

certPath：游戏id文件（xx.cert文件）

configPath：加固配置文件（tpshell-config.xml，配置哪些文件加固、哪些不加固）

注意配置文件中需要添加签名文件为白名单文件！！否则在出完加固包后无法进行公司级二次签名，因为会被ACE识别为二次签名包体文件而闪退！

3、enter键进行加固

注意事项：每个游戏的游戏id都不一样，游戏id文件也不一样。需要在ACE官网注册游戏，官网会给相关的游戏id及文件。如果没有在他们官网注册游戏，是不能用他们的服务的

例图：

<DocImage src='addmtp/8d7bd64b7d2782a59b4f965b11bf6ea4.png'></DocImage>

<DocImage src='addmtp/2972aa921448fea3c90b31832da520a5.png'></DocImage>

## 常见问题

Q1：包体加固后再签名闪退

A1：请查看tpshell-config.xml配置是否正常配置

Q2：渠道包如何加固

A2：打渠道包和加固有冲突。使用ACE的一旦先加固，就打不了渠道包了，ACE的加固服务做了这一层保护。渠道包的核心，是拆包->替换->合包，而ACE对这种行为做了保护，需要额外处理。使用MTP加固的渠道包，需要先打渠道，再加固，再签名的流程。