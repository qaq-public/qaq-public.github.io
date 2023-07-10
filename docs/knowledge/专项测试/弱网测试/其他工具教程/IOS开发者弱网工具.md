---
sidebar_position: 1
---


## 简介

使用xcode工具 进行手机上的开发者工具安装，仅限IOS设备使用


## 环境配置

一台安装最新版本xcode的MAC，以及对应设备的开发者证书（需要包含测试设备的udid）

## 使用说明

（1）打开xcode，选择如图选项
<DocImage src='nettest/ios7.png'></DocImage>
<DocImage src='nettest/ios1.png'></DocImage>


（2）添加证书
<DocImage src='nettest/ios2.png'></DocImage>


（3）连接手机  设置-开发者，可以看到Network Link Conditioner
<DocImage src='nettest/ios3.png'></DocImage>
<DocImage src='nettest/ios4.png'></DocImage>
<DocImage src='nettest/ios5.png'></DocImage>


（4）配置参数
<DocImage src='nettest/ios6.png'></DocImage>


## 具体配置参数
1)in Bandwidth 下行带宽，即下行网络速度

2)In packet loss 下行丢包率

3)in delay 下行延迟，单位ms

4)out bandwidth 上行带宽

5)out packet loss 上行丢包率

6)out delay 上行延迟

7)DNS delay DNS解析延迟

8)protocol 支持Any，IPV4、IPV6

9)interface 支持Any，WI-Fi，cellular（蜂窝网）

