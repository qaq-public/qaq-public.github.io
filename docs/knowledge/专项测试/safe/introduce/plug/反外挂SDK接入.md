---
sidebar_position: 2
---

 import { DocImage } from "/src/components/index.js"

<a id="gfword"></a>

## 反外挂SDK接入

[ACE手游反外挂SDK接入-官方文档（国内）](https://www.anticheatexpert.com/#/doc-center/a9216d0754927abc46e65b5409a32f5d0683b16d)

[ACE手游反外挂SDK接入-官方文档（海外）](https://intl.anticheatexpert.com/#/doc-center/a9216d0754927abc46e65b5409a32f5d0683b16d)

## 接入前须知

1. SDK支持系统平台为Android和iOS
2. 反外挂SDK相关文件不可被混淆（仅Android）
3. 与加固结合可有效保护基础反外挂SDK的稳定运行
4. 官方教程仅支持SDK6.1.11及以上版本

## SDK接入流程

### 获取SDK

1. 进入ACE工具中心  

[ACE工具中心（国内）](https://www.anticheatexpert.com/#/tool-center)

[ACE工具中心（海外）](https://intl.anticheatexpert.com/#/tool-center)

2. 下载对应地区的反外挂SDK

- 点击下载最新版

<DocImage src='ace/image-20220922171752950.png'></DocImage>

- 选择关联游戏项目，并同意服务条款

<DocImage src='ace/image-20220922171916026.png'></DocImage>

- 点击确认后下载SDK文件

3. SDK文件目录结构

- demo
  - android  ：存放Android的demo文件，包括C、C#、Java
  - ios           ：存放iOS的demo文件，包括C、C# 
- SDK     存放各语言及平台对应反外挂SDK
  - Android  ：    存放Android反外挂SDK，包括C、C#、Java
  - iOS          ：   存放iOS反外挂SDK，包括C、C#
  - iOS_bitcode：存放watchos 反外挂SDK，包括C、C#

### 选择SDK

- 根据游戏运行地区、运行平台、支持的CPU架构选择SDK动态库，需选择文件有：

```
（国内）
tp2.cs
tp2.jar (Android)
libtersafe2.so (Android)
tersafe2.framework(iOS动态库)

（海外）
ano_sdk.cs
ano.jar (Android)
libanogs.so (Android)
anogs.framework(iOS动态库)
```

### 接入步骤

- 请参考：
- [ACE手游反外挂SDK接入-官方文档（国内）](https://www.anticheatexpert.com/#/doc-center/a9216d0754927abc46e65b5409a32f5d0683b16d)
- [ACE手游反外挂SDK接入-官方文档（海外）](https://intl.anticheatexpert.com/#/doc-center/a9216d0754927abc46e65b5409a32f5d0683b16d)



## 注意事项

### ACE产品合规

[ACE产品合规系列指引(国内)](https://docs.qq.com/doc/DY0xnQnFRRnVpRmJj)

[ACE产品合规专项指引 (国外)](https://docs.qq.com/doc/DY0hSTWhyQ0N5cnBj)

由于合规升级，谷歌应用商店对于获取应用安装列表比较敏感，若app申请该权限或开启应用安装列表采集（Android），会导致谷歌应用商店审核不通过，从而无法上架。
请勿申请以下权限：

```
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" />
# "android.permission.QUERY_ALL_PACKAGES"用于获取应用列表信息
```

请勿开启以下开关：

```
AnoSdk.AnoIoctl("AllowAPKCollect");
```

影响功能：二选一变种、可疑环境虚拟机扫描不再可用

若有开启安装列表扫描需求，请参考以下接入教程：[Android APK列表扫描接入教程（国内）](https://www.anticheatexpert.com/#/doc-center/a653b410b8a65b8c3930c32684dd01c600d2a68e) & [Android APK列表扫描接入教程（海外）](https://intl.anticheatexpert.com/#/doc-center/a653b410b8a65b8c3930c32684dd01c600d2a68e)
