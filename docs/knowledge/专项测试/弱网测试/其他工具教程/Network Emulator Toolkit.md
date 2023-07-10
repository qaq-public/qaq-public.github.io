---
sidebar_position: 1
---


## 简介

Network-Emulator-Toolkit，这个工具的作用主要是设置丢包率和延时，类似clumsy用法


## 环境配置
https://qaq.com/static/G1/%E5%B7%A5%E5%85%B7/NetworkEmulatorToolkit64_jb51.rar?download=true

默认安装即可

## 使用说明

（1）新建VirtualChannel，File->new或者 Configuration->New Channel;

（2）再建一个过滤器Filter,Configuration->New Filter 

<DocImage src='nettest/networktools1.png'></DocImage>


设置说明：1. All Network 是指所有网络；

                          2. IPV4、IPV6(本地IP(Local IP)，或者远程IP(Remote IP)及子网掩码(IP Mask))；

                          3.可以指定本地端口(Local Port)或远程端口(Remote Port)大小范围；

                          4.协议(Protocol)，针对TCP\UDP协议；

                          5.可以选择网卡适配器(Adapaters），对适配器增删改；

（3）新建连接Link,Configration->New Link

<DocImage src='nettest/networktools2.png'></DocImage>


（4）设置UpStream和DownStream

     双击link或者悬浮link上方鼠标右键，打开UpStream、DownStream

【loss】丢包：

<DocImage src='nettest/networktools3.png'></DocImage>


No Loss：默认，不模拟丢包。
Periodic loss: 模拟周期性的丢包。按填写数量(设为x个)，每x个包，就丢一个包(one packet is dropped per given number of packets)。
Random loss: 模拟随机丢包，按给定丢包的概率，随机丢包。
Burst loss: 模拟根据给定的可能性进行丢包。当发生一个丢包事件时，接着连续丢几个包（丢包数量控制在最大(max)最小值(min)之间）。
G-E loss: 模拟发生数据包丢失遵循Gilbert-Elliot模型，由两个状态组成：好的状态和坏的状态。可分别为这2个状态指定数据包丢失率,同时可设置网络传输在这两种状态的概率


 【error】数据错误（网络传输过程中，包中一个或者多个字节出现Error）

<DocImage src='nettest/networktools4.png'></DocImage>

No Error 不模拟数据传输错误
Random error：根据给定的比例，模拟随机发生传输错误。
G-E error：发生传输错误遵循Gilbert-Elliot Model, 模型，由两个状态组成：好的状态和坏的状态。可分别为这2个状态指定数据包丢失率,同时可设置网络传输在这两种状态的概率(the network transit between the two states according to given transition probabilities)
错误概率单元(Error Rate Unit):
Bit error: 设置出错概率为每个字节出错的概率。
Packet error: 设置出错概率为每个包出错的概率。  


【Latency】出错和丢包的关系

<DocImage src='nettest/networktools5.png'></DocImage>


大多数情况下，包出错导致包丢失，特殊情况下，包中的数据被编码，协议栈可恢复被损坏的包，经过修正后，包为可接受的包，即包不丢失。此外，除了包出错会导致包丢失，其它因素也会影响包丢失，如连接失败（Link failure），缓冲区溢出(buffer overflow)，队列管理和传输超时(transmission timeout)等。
延迟来自某应用发送的数据包被另一个应用程序接收到的时间。
Fixed delay: 按给定值，延迟固定时间（单位：毫秒）packets are delayed for a fixed amount of time.
Uniform delay: 按统一分布，延迟一定量的时间(时间控制在最大最小值之间)
Normal delay: 按正态分布.延迟一定量的时间（average：平均值，Devation：偏差)
Linear delay: 延迟一定量的时间（在给定时间周期(Period)内，延迟的时间大小从最小值线性增加到最大值，当达到最大值时，又从最小值开始。
Burst delay: 根据给定概率（Probability），延迟一定量的时间(Latency)， 丢包数控制最大值和最小值之间


【BW&Queue】

<DocImage src='nettest/networktools6.png'></DocImage>


如果不指定带宽（bandwith），则不修改传输速率。
如果不设置队列，则不对接到的包做任何队列操作
 
 队列：
Normal queue：所有接收到的包都被放入一个指定队列大小的先进先出(First In, First Out)队列。

Randomly Early Detection (RED) queue：所有接收到的包都被放入一个RED队列。如果队列大小小于

给定的最低阈值(Minimum Threshold),队列被评估为不拥挤的，什么都不做；如果队列大小大于给定

最大阈值（Maximum Threshold）,则队列被评估为拥挤的，根据丢包规则，丢弃一些包。
 
丢包规则：
Drop front: 必要时，丢弃位于队列头部的包。.
Drop tail: 必要时，丢弃位于队列尾部的包。
Drop random：必要时，根据统一分布，随机丢个包。
Queue Mode：设置队列大小的单位，以包(Packet Mode)为单位或者以字节为单位Byte Mode


【BgTraffic】背景流->延时效果

一些网络数据包交换和模拟的两端没有任何关系，被指为背景流(background traffic)。这些背景流会带来延时效果。
Constant-bit rate (CBR) traffic: 根据给定的固定比例生成背景流（每XX kbps、mbps数据包，xx字节背景流）
Exponential traffic：根据指数On/Off时间分布生成背景流。个人理解，Burst则为生成背景流时间，Idle则不生成背景流时间(时间单位：秒
Pareto traffic: 同上，不过是排列图分布（Pareto）


【Recorder】接收顺序

<DocImage src='nettest/networktools7.png'></DocImage>


模拟收到的包不是按发送顺序排序的。
No Recoder：不模拟



【Disconnection】模拟周期性断开

<DocImage src='nettest/networktools8.png'></DocImage>

Connection time: 一段时间周期内，link保持连接状态的持续时间。
Disconnection time: 一段时间周期那日，link保持断开状态的持续时间
Disconnection rates: link发生断开连接的比率



工具栏介绍

<DocImage src='nettest/networktools9.png'></DocImage>



连接方式：

Dialup56k：通过传输速率为56kbps的modem进行连接

ADSL(128/512): 通过上行128kbps，下行512kbps的ADSL连接。

GPRS：它是GSM移动电话用户可用的一种移动数据业务，理论传输速率115kbit/s，实际可达53.6Kbps。

CDMA2000：3G移动通讯标准。

WCDMA：宽带码分多址（英语：Wideband Code Division Multiple Access，常简写为W-CDMA），是一种3G蜂窝网络，使用的部分协议与2G GSM标准一致。

IEEE802.11b：通过无线局域网，带宽最高可达11Mbps，实际的工作速度在5Mb/s左右，室外为300米；在办公环境中最长为100米



（4）开始测试

<DocImage src='nettest/networktools10.png'></DocImage>