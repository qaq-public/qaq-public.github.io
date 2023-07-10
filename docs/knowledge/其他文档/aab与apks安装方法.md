# AAB与APKS安装
import { DocImage } from '/src/components/index.js'

## 环境配置

### PC配置java环境

[Java下载地址](https://www.oracle.com/java/technologies/)

[Java配置方法](https://blog.csdn.net/weixin_46128831/article/details/122514819)

### PC配置adb环境

[adb下载地址](https://qaq.com/static/G1/GTC/%E7%A0%94%E5%8F%91%E5%9F%8B%E7%82%B9/adb.zip?download=true)

[adb配置方法](https://blog.csdn.net/weixin_46932303/article/details/106969799?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165268279316781667861056%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165268279316781667861056&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-106969799-null-null.142^v9^control,157^v4^control&utm_term=adb%E5%AE%89%E8%A3%85&spm=1018.2226.3001.4187)

## aab与apks安装方法

### apks安装

1.  确认安装所需文件齐全（[bundletool-all-1.7.1.jar](https://qaq.com/static/G1/GTC/%E7%A0%94%E5%8F%91%E5%9F%8B%E7%82%B9/bundletool-all-1.7.1.jar?download=true)，apks安装包）

2.  将手机连入电脑

3.  打开手机的开发者模式，开启usb调试

4.  检查开发者模式下有没有usb验证应用，有的话就打开（非必要项）

5.  电脑打开运行窗口（win+R）输入cmd

6.  在指令栏中输入```adb devices```，当手机deviceid后面显示device说明成功接入

<DocImage src='installaab/a9a6ecbb7b4e258e97ae6e306e0172eb.png'></DocImage>

7.  输入cmd命令：

 ```java -jar E:\apks\bundletool-all-1.7.1.jar install-apks --apks=E:\apks\20220523130306.apks --device-id=a3f3dc89```

 **java -jar (bundletool-all-1.7.1.jar文件的路径），apks=apks包名带路径，devices-id=手机的deviceid号**



   

8.  出现如图的反馈说明安装成功

    （安装时间一般在10分钟左右，时间较长，耐心等待）

    <DocImage src='installaab/66b9e489a58bc600436aa1ddc2937490.png'></DocImage>

### 模拟器安装

1.  通过adb连接模拟器

    ```adb connect 127.0.0.1:62001```

    **127.0.0.1：模拟器端口号**

2.  输入cmd命令：

    ```java -jar E:\apks\bundletool-all-1.7.1.jar install-apks --apks=E:\apks\20220523130306.apks --device-id=127.0.0.1:62001```

     **java -jar (bundletool-all-1.7.1.jar文件的路径），apks=apks包名带路径，devices-id=手机的deviceid号**  
    
3.  列举部分以下模拟器对应的端口号

    逍遥游：21503  
    夜神模拟器：62001  
    海马玩模拟器：26944  
    网易mumu模拟器：7555  
    天天模拟器：6555  
    BlueStacks：5555  
    天天安卓模拟器：5037  
    安卓模拟器大师：54001  
    Genymotion：5555

4.  模拟器端口号的获取：[点击跳转](https://blog.csdn.net/weixin_45598506/article/details/107918803)

### aab转换至apks

1.  确认转换所需文件齐全（bundletool-all-1.7.1.jar，[user.keystore](https://qaq.com/static/G1/GTC/%E7%A0%94%E5%8F%91%E5%9F%8B%E7%82%B9/user.keystore?download=true)，aab包）

2.  电脑打开运行窗口（win+R）输入cmd

3.  在cmd命令行中输入：

    ```java -jar bundletool-all-1.7.1.jar build-apks --bundle=E:\G24\233.aab --output=E:\G24\233.apks --local-testing --ks=E:\G24\user.keystore --ks-pass pass:123321 --ks-key-alias=sdk_test --key-pass pass:123321```

    **java -jar (bundletool-all-1.7.1.jar文件的路径），bundle=aab包名带路径，output=（包名去掉aab后缀，带地址）.apks,ks=user.keystore文件路径**
    

4. 指定位置多了一个apks的包说明转换成功
5. 使用对应的apks进行apks的安装

