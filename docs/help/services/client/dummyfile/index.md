# 客户端代码注入平台

import DocCardList from '@theme/DocCardList';

<DocCardList />

import {WeChatLink} from "/src/components/index.js"
import { DocImage } from '/src/components/index.js'

## 平台简介
`dummyfile`平台主要包含：脚本配置、Wi-Fi管理两个模块。旨在为项目组提供一个在线的客户端代码注入平台，可在不重新打包的情况下,修改资源下载地址、启用或关闭客户端功能、执行hotfix(在客户下载dummyfile之后的逻辑都可以修改,包括lua和C#)等。特点:
- 不重新打包、装包的情况下，测试新功能
- win包验证修复一些仅在手机端出现的bug(加打印，加弹窗提示)
- 动态开关功能


## 使用流程
### 1. 创建Wi-Fi
确认自己使用测试设备(手机、平板或PC)的IP, 在 [Wi-Fi管理](/dummyfile/wifis) 创建一个对应的Wi-Fi, IP段为设备IP的前三位(如已存在可跳过，连接到同一个Wi-Fi或同一个楼层网线的设备IP前三位是相同的)
<DocImage src='dummyfile/step1.png'></DocImage>

### 2.创建配置
在 [脚本配置](/dummyfile/scripts) 界面新建一个配置, 选择上面创建的Wi-Fi并填写想要执行的lua脚本
<DocImage src='dummyfile/step2.1.png'></DocImage>
<DocImage src='dummyfile/step2.2.png'></DocImage>

### 3. 添加白名单
在 [脚本配置](/dummyfile/scripts) 界面找到上面创建的配置，为该配置新增一个IP白名单，填写自己的设备IP
<DocImage src='dummyfile/step3.png'></DocImage>

### 4. 开始测试
启动游戏客户端即可加载到对应的lua脚本

## 最佳实践
### 单人多环境管理
在多个Wi-Fi下各创建一个配置, 连接不同的Wi-Fi表示连接不同的环境


<!-- ## 工作原理
<DocImage src='dummyfile/frame.png'></DocImage> -->

## 使用案例
### 案例一

### 案例二
## Q&A
暂无

>更多问题请联系：<WeChatLink name='李白'>李白</WeChatLink>