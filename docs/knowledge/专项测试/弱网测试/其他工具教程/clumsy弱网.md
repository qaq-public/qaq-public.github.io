---
sidebar_position: 1
---


## 简介

一款在PC端使用的弱网工具，clumsy可以设置延迟，还能设置节流、重发、乱序等模式
如果需要在手机上面测试，需要手机连接电脑代理，然后在电脑端设置对应的弱网状态，手机上就处于相应的弱网状态。


## 环境配置
https://qaq.com/static/G1/%E5%B7%A5%E5%85%B7/clumsy-0.2-win64.zip?download=true

点击链接，下载压缩包，解压到本地，选择clumsy.exe 双击打开即可


### 选择拦截类型
<DocImage src='nettest/clumsy_1.png'></DocImage>

选择说明：

一、简单方式，直接选择all sending packets ,这个选完之后，启动之后，当前电脑所有应用都处于弱网状态

二、精确方式，tcp and (ip.DstAddr == 198.51.100.1 and ip.DstPort == 12354 )  //  udp and (udp.DstAddr == 198.51.100.1 and udp.DstPort == 12354 )

需要知道是tcp协议还是udp协议，还需要知道服务器地址和服务器端口号，这样设置之后，就会精准的拦截指定的地址的协议

以下是所有参数的说明

outbound：是否为输出数据包

inbound：是否为输入数据包

ifldx：网络设备index

subIfIdx：副网络设备index

ip：是否为IPv4

ipv6：是否为Ipv6

icmp：是否为ICMP

tcp：是否为TCP

udp：是否为UDP

ip.*: IPv4的参数（见DIVERT_IPHDR

ipv6.*：IPv6的参数(见DIVERT_IPV6DHR

icmp.*：ICMP的参数(见DIVERT_ICMPHDR

icmpv6.*：ICMPV6的参数(见DIVERT_ICMPV6HDR

tcp.*：TCP的参数(见DIVERT_TCPHDR

tcp.PayloadLength：TCP数据长度

udp.*：UDP的参数（见DIVERT_UDPHDR

可以用“< ==”，“> ==”，“and”, “or”， “=”进行过滤器设置



### 勾选框说明

Lag：延迟，把请求缓存一段时间再发出，可以用来模拟网络延迟，最大3000ms；

Drop：丢包，随机丢弃一些请求，参数百分比；

Throttle：节流，把一小段时间内的请求拦截下来，再在同一时间发出去，参数百分比；

Duplicate：重发，随机复制一些请求，与原请求一起发送，参数百分比；

Out of order：乱序，打乱请求的发送顺序，参数百分比；

Tamper：篡改，随机修改小部分请求的内容，参数百分比；



### 设置弱网参数

只有勾选了参数，才能进行设置

<DocImage src='nettest/clumsy_2.png'></DocImage>




### 启动

点击Start，显示绿色点闪烁，代表启动成功。

<DocImage src='nettest/clumsy_3.png'></DocImage>




### 停止

点击stop，网络恢复正常。

