---
sidebar_position: 1
---
## 简介

Charles其实是一款代理服务器，通过成为电脑或者浏览器的代理，然后截取请求和请求结果达到分析抓包的目的。

## 环境配置
https://qaq.com/static/G1/%E5%B7%A5%E5%85%B7/charles-proxy-4.5.6-win64.msi?download=true

下载安装启动

## 使用教程
import { DocImage } from "/src/components/index.js"

#### 打开charles工具，选择proxy
<DocImage src='nettest/charles1.png'></DocImage>


#### 点击proxy中的Throttle settings，打开网络设置页面 
<DocImage src='nettest/charles2.png'></DocImage>

#### 首先勾选Enable Throttling，在Throttling preset中可以选择工具默认配置的一些网络状况
<DocImage src='nettest/charles3.png'></DocImage>

#### 不使用工具自带的配置的话可以自己填写各个参数的值
<DocImage src='nettest/charles4.png'></DocImage>

#### 配置参数解析：

bandwidth —— 带宽，即上行、下行数据传输速度

utilisation —— 带宽可用率，大部分

modern是100%round-trip

latency —— 第一个请求的时延，单位是ms

MTU —— 最大传输单元，即TCP包的最大size，可以更真实模拟TCP层，每次传输的分包情况

Releability —— 指连接的可靠性。这里指的是10kb的可靠率。用于模拟网络不稳定

Stability —— 连接稳定性，也会影响带宽可用性。用于模拟移动网络，移动网络连接一般不可靠



#### 如果测试中只需要只对部分域名的请求进行网络控制的话，勾选only for selected hosts选项，添加hosts
<DocImage src='nettest/charles5.png'></DocImage>

#### 进入添加hosts页面，输入指定的参数，不需要的话填*号，填写完成后点击ok
<DocImage src='nettest/charles6.png'></DocImage>

#### 最后点击ok完成配置
<DocImage src='nettest/charles7.png'></DocImage>

