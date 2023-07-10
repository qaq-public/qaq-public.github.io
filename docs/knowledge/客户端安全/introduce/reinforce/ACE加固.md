---
sidebar_position: 1
---

import { DocImage } from "/src/components/index.js"



## ACE加固介绍

ACE加固中包含代码混淆、文件校验、Unity AB资源加密、global-metadata加密等多项加固策略， 为静态包体保驾护航，保证了游戏包体的安全。

### ACE加固目的

- ACE加固提供代码混淆，对于SO文件，会进行代码、函数、导出表加密混淆、防止HOOK攻击，有效提高脱壳难度；
- 对于DLL模块，对其模块中的变量名、函数名、类名均进行加密混淆处理，有效提高静态分析门槛；
- 文件校验策略：避免了因游戏包内资源被更改而导致破解版的出现，当游戏资源做出删改操作时，将触发ACE的闪退机制，无法进入游戏；
- 若未开启ACE加固，会导致使用GDA反编译工具对包体进行反编译后，直接获取源码，一方面会造成游戏财产的直接损失，另一方面会导致资源文件被修改后重新出包，从而出现盗版游戏，影响游戏效益。

### 安全加固（web）

- 通过网页即可完成对apk包体的加固；
- 详情请参考：[ACE安全加固（web）](https://www.anticheatexpert.com/#/doc-center/f678f7e0fb2811b17ec77c71f1327cffeff5dca3)
- web加固地址：  [ACE-APK安全加固 (国内)](https://www.anticheatexpert.com/#/console/service/safe) & [ACE-APK安全加固 (海外)](https://intl.anticheatexpert.com/#/console/service/safe)

### 命令行加固工具

- 命令行工具是腾讯游戏安全团队提供的便携、快速的加固服务工具，可集成到游戏CI流程中。
- 两种加固模式，支持apk和aab文件；
- 自动签名，正确配置后，加固签名自动完成；
- 加固详情可参考：[ACE加固流程](ACE加固流程.md)

### 单文件加固

- 当前ACE版本支持对SO、global-metadata.dat文件进行加密；
- 单文件加固不具有任何反调试或APK资源校验能力，使用于热更等场景；
- 加固详情见官方文档：[ACE文档中心（文件单独加固工具）](https://www.anticheatexpert.com/#/doc-center/111bbf15bb50c1c309b95b96ff014d18fc3336cf)

## Unity AB资源加密介绍

ACE加固目前已提供Unity AB资源加密方案，但仅适用于AssetBundle这种Unity游戏资源打包方式，且只支持AssetBundle.LoadFromFile这一种加载方法，否则将无法开启AB资源加密，强行开启也不会生效。

[ACE官方Unity AB资源加密（国内）](https://www.anticheatexpert.com/#/doc-center/ef679ed41c183d469d8eef6f910fb3e8a77991c1)

[ACE官方Unity AB资源加密（海外）](https://intl.anticheatexpert.com/#/doc-center/ef679ed41c183d469d8eef6f910fb3e8a77991c1)

### AB资源加密目的

- Unity通过AB包的方式将游戏项目中的模型、预制体、脚本、声音等资源进行了统一管理
- 未加密AB包可通过反编译软件，直接解析为可见资源，从而造成资源的泄露
- 加密后的AB包则一定程度的增加了解密成本，无法使用反编译软件直接解析

### AB资源加密方案

- ACE提供AB资源加密方案，并已集成到命令行加固工具中；
- 优点：一站式服务，使用加固命令即可完成对AB资源的加密；
- 缺点：无法适用全部场景，仅适用于AssetBundle打包方式，且要求加载方式为AssetBundle.LoadFromFile。

## global-metadata.dat加密介绍

ACE加固已提供global-metadata.dat加固功能，在已有加固功能的基础上，ACE还提供对部分关键数据进行二次加密，保证在游戏运行时global-metada.dat依旧保持加密状态。

[ACE官方global-metaddata.dat加密(国内)](https://www.anticheatexpert.com/#/doc-center/d144163534f6e0231c4a44ec36f465d59d061a52)

[ACE官方global-metaddata.dat加密(海外)](https://intl.anticheatexpert.com/#/doc-center/d144163534f6e0231c4a44ec36f465d59d061a52)

### global-metadata.dat加密目的

- 开发者可利用游戏内的global-metadata.dat文件还原libil2cpp.so的所有符号信息和字符串信息；
- 破解该文件成本较小，百度搜索ilcpp或破解等关键字就会有大量教程；
- 加密后外挂开发者无法直接使用global-metadat.dat文件获取信息；
- 运行时解密则保证了在游戏运行时global-metadata.dat依旧保持加密状态。

### global-metadata.dat运行时解密

- 在加固现有的基础加固功能上，对部分重要数据进行二次加密
- 对比二次加密前后的global-metadata.dat文件，发现头文件相同，但仍有部分数据处于加密状态

