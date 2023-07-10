import {WeChatLink, DocImage } from "/src/components/index.js"

# VPN的配置方法

用于连接海外网络，满足需要访问外网的环境配置，例如Google充值等

## Android端配置方法

### 软件下载

[VPN安装包下载（Android）](https://help.fengye.la/res/ShadowsocksR-android.apk)

### 软件配置

1.  安装VPN安装包，拖动至夜神模拟器界面或手机界面

<DocImage src='vpn/3f2145b59aea4e33fe07d44dd27158c4.png'></DocImage>

2.  配置手机或模拟器VPN （SSR）

<DocImage src='vpn/ba7692b635626dfed058fbe471153f3d.png'></DocImage>

- 删除默认节点

<DocImage src='vpn/7cd57b3d1e597c3eb55374d4d242dd7e.png'></DocImage>


- 删除默认SSR订阅

<DocImage src='vpn/31d170c23e638ed8992fa6d3231dff33.png'></DocImage>

<DocImage src='vpn/5aaae9011a27c8a2320d829d3aa0bdeb.png'></DocImage>


- 订阅海外SSR

<DocImage src='vpn/9849459ccf663f167d777efd725d1142.png'></DocImage>

<DocImage src='vpn/41c90d0b8f86da4c6d8651d3deac3ea4.png'></DocImage>


3.  获取节点信息

- 点击获取[节点信息](https://www.tapd.bilibili.co/42833848/markdown_wikis/show/#1142833848001006261)


4.  节点添加成功一般有如下场景

<DocImage src='vpn/a715239957817851cce1ab565b849488.png'></DocImage>


5.  选择首个或根据需要选择海外节点，一般默认即可

<DocImage src='vpn/5f3b523d679928bf7e6c571c6686468b.png'></DocImage>

6.  切换路由为：绕过中国大陆地址

<DocImage src='vpn/45adace4c684da852a5ba5dbe2e3bc19.png'></DocImage>

- 选择绕过中国大陆地址

<DocImage src='vpn/511286ca93efbddb0f9ab98294f28903.png'></DocImage>


7.  运行：点击运行即可，运行后屏幕顶部会出现钥匙字符即为成功

<DocImage src='vpn/e160e149edfb85c788f1d30a1024175d.png'></DocImage>

<DocImage src='vpn/90e61407e6acfcd8d96de6612f532f62.png'></DocImage>

## IOS端配置方法

### 软件下载

1. 联系<WeChatLink name='莫得'>莫得</WeChatLink>获取App Store账号信息

2. 使用获取到的账号登录Apple商店下载Shadowrocket

<DocImage src='vpn/image-20220825120932829.png'></DocImage>

### 软件配置

1. 安装完成后打开Shadowrocket，添加节点

   <DocImage src='vpn/image-20220825143316676.png'></DocImage>

2. 节点获取

- 点击获取[节点信息](https://www.tapd.bilibili.co/42833848/markdown_wikis/show/#1142833848001006261)

3. 节点配置

- 点击右上角“+”号后进入添加节点界面，选择节点类型

  <DocImage src='vpn/image-20220825150950133.png'></DocImage>

- 节点类型界面选择Subscribe类型

  <DocImage src='vpn/image-20220825151126589.png'></DocImage>

- 添加节点，将获取到的节点信息填入URL中

  <DocImage src='vpn/image-20220825151248028.png'></DocImage>

- 点击完成，若添加成功则弹出“保存成功”窗口

  <DocImage src='vpn/image-20220825151407314.png'></DocImage>

  <DocImage src='vpn/image-20220825151534616.png'></DocImage>

4. 连接VPN

- 点击连接按钮

  <DocImage src='vpn/image-20220825151904483.png'></DocImage>

- 首次连接需添加系统VPN

  <DocImage src='vpn/image-20220825151751978.png'></DocImage>

  <DocImage src='vpn/image-20220825151806836.png'></DocImage>

- 若上方出现VPN字样，则连接成功

  <DocImage src='vpn/image-20220825152132350.png'></DocImage>

## PC端配置方法

### 软件下载

[VPN安装包下载](https://help.fengye.la/res/ShadowsocksR-win.zip)

### 软件配置

1. 解压压缩包
   <DocImage src='vpn/image-20220824183244684.png'></DocImage>

2. 安装应用

   - win7系统以下请使用 ShadowsocksR-dotnet2.0.exe

   - win7系统及以上请使用 ShadowsocksR-dotnet4.0.exe
   - 双击运行，若出现防火墙阻拦，请点击允许访问网络
   
   <DocImage src='vpn/image-20220824184414596.png'></DocImage>
   
3. vpn配置

   - 软件启动后右下角会出现小飞机图样

     <DocImage src='vpn/image-20220824185408440.png'></DocImage>

   - 右击飞机图标，出现 服务器订阅 -> SSR服务器订阅设置，点击进入订阅设置界面

4. 获取节点信息

   - 点击获取[节点信息](https://www.tapd.bilibili.co/42833848/markdown_wikis/show/#1142833848001006261)
5. 添加节点信息

   - 将获取到的节点信息直接复制粘贴即可（无需复制链接网址内信息）

​		<DocImage src='vpn/image-20220824191627374.png'></DocImage>

6. 更新vpn订阅
   - 右击右下角软件图标，出现 服务器订阅 -> 更新SSR服务器订阅（不通过代理）

​		<DocImage src='vpn/image-20220824193036321.png'></DocImage>

​		<DocImage src='vpn/image-20220824192819612.png'></DocImage>

7. 软件运行

   - 双击右下角软件图标

   - 选择对应地区节点

     ​	<DocImage src='vpn/image-20220824194643904.png'></DocImage>

   - 若无法访问对应地区网络，可选择代理规则 -> 绕过局域网和大陆

     ​	<DocImage src='vpn/image-20220824195801868.png'></DocImage>

   - 若可正确访问对应地区网络，则开启成功

## MAC端配置方法

### 软件下载

[ClashX下载](https://help.fengye.la/res/ClashX.dmg)

### 软件配置

1. 应用程序安装

- 在访达（Finder）中双击ClashX.dmg

<DocImage src='vpn/image-20220825162559732.png'></DocImage>

- 在用Finder打开应用程序界面

<DocImage src='vpn/image-20220825162713428.png'></DocImage>

- 将ClashX pro 拖入应用程序界面

<DocImage src='vpn/image-20220825162752393.png'></DocImage>

2. 获取节点信息
- 点击获取[节点信息](https://www.tapd.bilibili.co/42833848/markdown_wikis/show/#1142833848001006261)
3. 节点配置

- 运行ClashX Pro，运行后状态会出现灰色的小猫咪图标

  <DocImage src='vpn/image-20220825165404102.png'></DocImage>

- 使用快捷键 command+ alt+M(订阅快捷键)或点击配置 -> 托管配置 -> 管理进入配置文件管理界面

  <DocImage src='vpn/image-20220825170630734.png'></DocImage>

- 点击增加节点，将获取到的节点信息复制粘贴后，点击确认

  <DocImage src='vpn/image-20220825170956721.png'></DocImage>

- 更新配置文件，点击更新后，提示更新成功即为成功

  <DocImage src='vpn/image-20220825171250977.png'></DocImage>

- 运行VPN，开启设置为系统代理，小猫图标由灰色转为高亮即为成功

  <DocImage src='vpn/image-20220825173231674.png'></DocImage>

## 常见问题

- Q：无法获取节点信息
- A : 请联系<WeChatLink name='莫得'>莫得</WeChatLink>获取节点信息