


import {WeChatLink, DocImage } from "/src/components/index.js"


## 下载node.js


下载网址：https://nodejs.org/en/download/

<DocImage src='qaqdeploy/d2170709a94ca5aec3037acee930a14e.png'></DocImage>

## 安装node.js

1. 下载完成后，运行文件开始安装

<DocImage src='qaqdeploy/d671fb45fdb60c1bb2fcb5b17196387a.png'></DocImage>

2. 点击【Next】按钮

<DocImage src='qaqdeploy/447d27dd1e87786d4174d6001104a000.png'></DocImage>

3. 创建一个nodejs文件夹为安装目录，勾选复选框，点击【Next】按钮

<DocImage src='qaqdeploy/697003f576fd6aeadfcf33d5e6cf7b7d.png'></DocImage>

4. 修改好目录后，点击【Next】按钮

图一
<DocImage src='qaqdeploy/aa89ff198212e39b5fb2ab01380ed258.png'></DocImage>

图二
<DocImage src='qaqdeploy/66af501c4e0cb720590340c3aff512a1.png'></DocImage>

图三
<DocImage src='qaqdeploy/ae8ff6500605c308fed3832531c782cb.png'></DocImage>

5. 安装完成后点击【Finish】按钮完成安装

<DocImage src='qaqdeploy/1b46527e4ce876333dcb6502741f189c.png'></DocImage>

6. 测试安装是否成功

在键盘按下【win+R】键，输入cmd，然后回车，打开cmd窗口

输入node_v显示node版本说明node安装成功，输入npm -v显示npm版本说明npm安装成功

<DocImage src='qaqdeploy/70e510480c0e17d6a3f7371bc5df7f84.png'></DocImage>

## 环境变量配置

1. 配置默认安装目录和缓存日志目录，在【nodejs】文件夹下创建两个文件夹【node_global】及【node_cache】如下图：

<DocImage src='qaqdeploy/902f58b836dc928ee96230ec2046ab64.png'></DocImage>

2. 执行命令

```npm config set prefix "E:\\nodejs\\node_global"```

```npm config set cache "E:\\nodejs\\node_cache"```

引号内填写本地文件夹存在的位置

3. 配置环境变量

   1.  “我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”

   2. 在【系统变量】下新建【NODE_PATH】，输入本地node_modules文件夹的路径

   <DocImage src='qaqdeploy/c49aed2425c8b47407b37b7f5eef2edb.png'></DocImage>

   3. 将【系统变量】下的【Path】新增两个变量，一个为本地nodejs文件夹路径、一个为本地node_modules文件夹路径

   <DocImage src='qaqdeploy/156ff65cbc07e00018941c15f61185b5.png'></DocImage>

## docs文档获取

1. 联系<WeChatLink name='莫得'>莫得</WeChatLink>添加git权限

2. 新建一个文件夹后进入文件夹右击选择Git Bash Here 

3. 首先输入命令行```git int``` 回车后，再输入命令行 ```git pull https://git.bilibili.co/qagame-web/docs.git ```拉取文件

<DocImage src='qaqdeploy/企业微信截图_1660878149185.png'></DocImage>




## 安装与运行npm

1.  在Windows搜索栏搜索powershell右击选择管理员身份运行

<DocImage src='qaqdeploy/0c0f7ad6613a080f214a1efee4272878.png'></DocImage>


2.  在powershell中输入命令cd跳转位置到docs资源资源路径下

<DocImage src='qaqdeploy/5aa2d634146e581b02f8c2a7703575cb.png'></DocImage>

3.  输入命令行npm
    install，等待文件下载完成（可能由于网络原因时间会必要长，耐心等待）

4.  输入命令行npm start，出现同意界面后输入 Y 同意

<DocImage src='qaqdeploy/59623b5bb4f3c97471f20ce863af4cb2.png'></DocImage>


5.  等待一段时间出现网站，启动成功

## 文档编写规则

1. 文档需要以md文件格式存放

   [Word转换Markdown教程](https://qaq.com//docs/services/solution/other/word转换Markdown文档说明)

2. 文档要想在网页内正常显示需要在文档内添加DocImage方法使图片正常显示，WeChatLink方法可以在文档内添加微信联系连接，文档内需要添加的代码如下

   ```import {WeChatLink, DocImage } from "/src/components/index.js"```

3. 文档内的图片需要存放在一个文件夹内，图片文件夹需要放在static文件夹下

   文档内的图片用代码引用显示，代码如下，src='引用的图片路径名'

   ```<DocImage src='qaqdeploy/59623b5bb4f3c97471f20ce863af4cb2.png'></DocImage>```
   
4. 文档内一般不用一级标题，默认文件名为一级标题 ，网页只显示二级和三级标题

