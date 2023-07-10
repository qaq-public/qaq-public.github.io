---
sidebar_position: 1
---

import { DocImage } from "/src/components/index.js"

## 简介

chrome浏览器自带network调试工具（仅限于webview测试）

## 环境配置

应用打开webview调试功能，具体如下：

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {

              WebView.setWebContentsDebuggingEnabled(true);
              
          }



## 使用说明


手机链接电脑，运行APP，进入具体H5页面

chrome的DevTools中打开Webview：进入chrome://inspect/#devices，会显示已经连接设备，选中待调试webview的inspect

network页面，No throttling下拉框，可以进行网络模拟

<DocImage src='nettest/network.png'></DocImage>