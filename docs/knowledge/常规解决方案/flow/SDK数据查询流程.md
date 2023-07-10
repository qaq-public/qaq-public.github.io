## SDK数据查询简介
游戏中进行的SDK操作会产生接口数据，接口数据会进行上报落库

SDK数据查询就是检查SDK上报数据是否正确落库，确保SDK落库数据与游戏中产生的数据一致

## SDK数据查询地址

import { DocImage } from "/src/components/index.js"

[国内平台游戏查询地址](http://game-data-bi-olap.bilibili.co/)

[海外平台游戏查询地址](http://game-data-bi-olap-hk.bilibili.co/)


## SDK数据上报的查询项

根据游戏的上线地区不同需要测试的项也不同

需要根据游戏项目中的需求来查询需要的上报的项，数据上报一般包括以下项

### 设备激活

**必查项**

首次使用手机运行游戏后产生的接口

清除本地存储后运行游戏也能产生该接口

### 研发区服

**必查项**

游戏的选服接口

### 用户登录

**必查项**

用户登录接口包括短信登录、账密登录、授权登录、自动登录、苹果登录五种登录接口，根据项目需求选择查询

*国内渠道包平台游戏所有方式的用户登录接口数据落库信息都为uosdk_bindSession*

### 创角

**必查项**

游戏内进行创建角色后产生的接口

### 心跳

**必查项**

游戏运行每隔一段时间产生的接口信息

### 下单及支付

游戏开启充值功能后此项为必查项

### 游客注册与游客升级

项目开启SDK游客注册与游客升级后此项为必查项

### 设备信息

海外平台设备信息只需要查prver

简体平台的Android端设备信息需要查询bd_id,oaid,imei,mac,adnroid_id,ip,prver

简体平台的IOS端设备信息需要查询idfa,ip,ua,pfver

### 数据上报模板

[SDK数据上报](https://qaq.com/static/G1/GTC%2F%E7%A0%94%E5%8F%91%E5%9F%8B%E7%82%B9/%E5%9F%8B%E7%82%B9%E6%B5%8B%E8%AF%95%E6%A8%A1%E6%9D%BF.xlsx?download=true)

## 简体地区SDK数据查询

*sdk事件触发到落库查询要等待20分钟*

**数据源库选择biligame_dc**

### 心跳数据查询

**dc_src表：表内以string字符串格式记录简体地区所有游戏的心跳源数据，用于查询心跳数据**


```
--心跳（更改需要查询的日期，游戏id，uid，时间段后查询）

SELECT t.ds, t.time , t.game_id, '心跳' as scene ,count(1) as cnt

FROM (

SELECT time , ds,regexp_extract(query_string, 'gameId=([^&]*)') AS game_id

, regexp_extract(query_string, '&uid=([^&]*)') AS uid

FROM dc_src

WHERE regexp_extract(query_string, 'method=([^&]*)') = 'heartbeat'

AND ds = '2022-07-27' --填写要查询的日期

) t

where game_id in ('3995') --填写游戏id

and uid in ('2022072515311212400000') --填写查询的uid

and t.time between '2022-07-27 17:40:00' and '2022-07-27 17:50:59' --查询的时间段

group by t.ds , t.time , t.game_id
```


查询结果如下

<DocImage src='sdkbitest/fdf1f88dbb17ca4c62d815131e760944.png'></DocImage>

### 设备激活数据查询

**设备激活信息查询的表为以下：**

**ods_cloud_mobile_login_hi**

**ods_cloud_uo_login_di**

**ods_idc_mobile_login_hi**

**ods_idc_uo_login_di**

**ods_idc_wpg_login_di**

**记录所有简体平台游戏的设备激活数据**

```

--设备激活（更改需要查询的日期，游戏id，设备udid后查询）

select t3.ds,t3.game_id,t3.udid , '设备激活' as scene , t3.time,count(1) as cnt

from (select t1.ds,t2.method,regexp_replace(t2.udid, '\\n', '') as udid

, case when t2.method in
('recharge','uosdk_recharge','wpg_recharge','createXyPayOrder','createXyRechargeOrder')
then t2.gameId

when t2.method in
('uosdk_addPayOrder','uosdk_addTecentOrder','uosdk_bindSession',
'uosdk_createrole','uosdk_notifyZone','uosdk_activate') then t2.app_id

else t2.game_id

end as game_id

, case when t2.method in
('uosdk_addPayOrder','uosdk_addTecentOrder','uosdk_bindSession','uosdk_createrole'

,'uosdk_notifyZone','notifyZone','wpg_wpgLogin','wpg_wpgReg','h5g_login',
'h5g_reg') then t2.user_id

when t2.method in ('uosdk_recharge') then t2.userId

when t2.method in ('wpg_recharge') then t2.rechargeMid

else nvl(get_json_object(replace(resp, '\\""', '""'), '$.uid'), uid)

end as uid

, to_char(from_unixtime(cast(t2.now/1000 as bigint)),'yyyy-mm-dd hh:mi:ss') as
time

, src_message

from (

select src_message, ds

from ods_cloud_mobile_login_hi

where ds = '2022-07-27' --查询的日期

union all

select src_message, ds

from ods_idc_mobile_login_hi

where ds = '2022-07-27' --查询的日期

union all

select src_message, ds

from ods_cloud_uo_login_di

where ds = '2022-07-27' --查询的日期

union all

select src_message, ds

from ods_idc_uo_login_di

where ds = '2022-07-27' --查询的日期

union all

select src_message, ds

from ods_idc_wpg_login_di

where ds = '2022-07-27' --查询的日期

) t1

lateral view json_tuple(src_message,'method', 'now',
'uid','user_id','userId','app_id','gameId','game_id','udid','resp','mid','rechargeMid','channel','timestamp')
t2 as method, now,
uid,user_id,userId,app_id,gameId,game_id,udid,resp,mid,rechargeMid,channel,timestamp

)t3

where 1=1

and t3.method in ('activate','uosdk_activate')

and t3.game_id in ('3995') --查询的游戏id

and t3.udid in ('alg7CzxdOQ9rXGwJdQl1') --查询的设备udid号

group by t3.ds,t3.game_id,t3.udid,t3.time;
```


查询结果如下

<DocImage src='sdkbitest/fc5734e0f27326107c93d18d0b922a14.png'></DocImage>

### SDK登录及支付信息查询

**简体平台游戏SDK登录及支付数据表：**

**ods_cloud_mobile_login_hi**

**ods_cloud_uo_login_di**

**ods_idc_mobile_login_hi**

**ods_idc_uo_login_di**

**ods_idc_wpg_login_di**

**记录所有简体平台游戏的研发区服，用户登录，创角，下单，支付以及设备信息数据**


```
--sdk接口信息（更改需要查询的日期，游戏id，uid，时间段后查询）

select t3.ds, t3.game_id

, t3.method

, case when method in ('loginOTPV3') then '短信登录'

when method in ('loginV3','userLogin') then '账密登录'

when method in ('userTokeOAuthLoginV3','cacheLogin') then '自动登录'

when method in ('thirdLoginV3') then '苹果登录'

when method in ('tokenExchangeV3','thirdAccountLogin') then '授权登录'

when method in ('uosdk_bindSession') then '用户登录'

when method in ('reg','regV3','regByTel','wpg_wpgReg','h5g_reg'

,'thirdAccountReg','regAccount','regByTelV2') then '用户注册'

when method in ('touristLogin','touristLoginV2','touristLoginV3') then
'游客注册/登录'

when method in
('bindAccount','promoteAccount','bindKomoeAccount','bindThirdAccount','tourBind'

,'bindAccountV2','thirdLoginMobileBindV3','touristBindTelPwdV3') then
'游客升级/转化'

when method in ('activate','uosdk_activate') then '设备激活'

when method in ('notifyZone','uosdk_notifyZone') then '研发区服notifyzone'

when method in ('createrole','uosdk_createrole') then '创角'

when method in ('recharge','uosdk_recharge') then '支付'

when method in ('addPayOrder','createOrder','globalAddPayOrder'

,'addTecentOrder','uosdk_addTecentOrder','uosdk_addPayOrder') then '下单'

else '其他'

end as scene

,count(1) as cnt

,t3.bd_id,t3.mac,t3.android_id,t3.pf_ver

,t3.time as time

-- ,'25520449' as uid

from (

select t1.ds,t2.method,regexp_replace(t2.udid, '\\n', '') as udid

, case when t2.method in ('recharge','uosdk_recharge','wpg_recharge'

,'createXyPayOrder','createXyRechargeOrder') then t2.gameId

when t2.method in
('uosdk_addPayOrder','uosdk_addTecentOrder','uosdk_bindSession'

,'uosdk_createrole','uosdk_notifyZone','uosdk_activate') then t2.app_id

else t2.game_id

end as game_id

, case when t2.method in ('uosdk_addPayOrder','uosdk_addTecentOrder'

,'uosdk_bindSession','uosdk_createrole'

,'uosdk_notifyZone','notifyZone'

,'wpg_wpgLogin','wpg_wpgReg'

,'h5g_login', 'h5g_reg') then t2.user_id

when t2.method in ('uosdk_recharge') then t2.userId

when t2.method in ('wpg_recharge') then t2.rechargeMid

else nvl(get_json_object(replace(resp, '\\""', '""'), '$.uid'), uid)

end as uid

, to_char(from_unixtime(cast(t2.now/1000 as bigint)),'yyyy-mm-dd hh:mi:ss') as
time

, t2.bd_id, t2.mac,t2.android_id,t2.pf_ver,src_message

from (

select src_message, ds

from ods_cloud_uo_login_di

where ds = '2022-08-05' --查询的日期

union all

select src_message, ds

from ods_cloud_mobile_login_hi

where ds = '2022-08-05' --查询的日期

union all

select src_message, ds

from ods_idc_mobile_login_hi

where ds = '2022-08-05' --查询的日期

union all

select src_message, ds

from ods_idc_uo_login_di

where ds = '2022-08-05' --查询的日期

union all

select src_message, ds

from ods_idc_wpg_login_di

where ds = '2022-08-05' --查询的日期

)t1

lateral view json_tuple(src_message,'method', 'now',
'uid','user_id','userId','app_id','gameId','game_id','udid','resp','mid','rechargeMid','channel','bd_id','mac','android_id','pf_ver','timestamp')
t2 as method, now,
uid,user_id,userId,app_id,gameId,game_id,udid,resp,mid,rechargeMid,channel,bd_id,mac,android_id,pf_ver,timestamp

) t3

where

t3.game_id in ('2701') --查询的游戏id

and t3.uid = '434607097' --查询的uid

and t3.time between '2022-08-05 00:55:00' and '2022-08-05 23:10:00' --查询的时间段

group by t3.ds,t3.game_id,t3.time, t3.udid

, t3.method

, t3.bd_id,t3.mac,t3.android_id,t3.pf_ver

, case when method in ('loginOTPV3') then '短信登录'

when method in ('loginV3','userLogin') then '账密登录'

when method in ('userTokeOAuthLoginV3','cacheLogin') then '自动登录'

when method in ('thirdLoginV3') then '苹果登录'

when method in ('tokenExchangeV3','thirdAccountLogin') then '授权登录'

when method in ('uosdk_bindSession') then '用户登录'

when method in ('reg','regV3','regByTel','wpg_wpgReg','h5g_reg'

,'thirdAccountReg','regAccount','regByTelV2') then '用户注册'

when method in ('touristLogin','touristLoginV2','touristLoginV3') then
'游客注册/登录'

when method in
('bindAccount','promoteAccount','bindKomoeAccount','bindThirdAccount','tourBind'

,'bindAccountV2','thirdLoginMobileBindV3','touristBindTelPwdV3') then
'游客升级/转化'

when method in ('activate','uosdk_activate') then '设备激活'

when method in ('notifyZone','uosdk_notifyZone') then '研发区服notifyzone'

when method in ('createrole','uosdk_createrole') then '创角'

when method in ('recharge','uosdk_recharge') then '支付'

when method in ('addPayOrder','createOrder','globalAddPayOrder'

,'addTecentOrder','uosdk_addTecentOrder','uosdk_addPayOrder') then '下单'

else '其他'

end;
```


查询结果如下

<DocImage src='sdkbitest/92ff598dcd3a3402f0fd6ec9f81a4ec8.png'></DocImage>

## 海外地区SDK数据查询

*Sdk事件触发到落库查询要等待20分钟*

**数据源库选择ali_hk_biligame_op_dc**

### 心跳数据查询

**stage_op_jp_heartbeat_i_hr：除繁体地区外所有海外平台地区的游戏心跳表**

**stage_op_tw_heartbeat_i_hr：繁体地区游戏心跳表**


```
--心跳（更改需要查询的日期，游戏id，游戏mid以及游戏地区的表后查询）

select t3.ds,t3.time,t3.game_id, '心跳' as scene,count(1) as cnt

from (

select t1.ds,to_char(from_unixtime(cast(now/1000 as bigint)), 'yyyy-mm-dd
hh:mi:ss') as time

, t2.method

, if(gameId <> '',gameId,game_id) as game_id

, if(channelId <> '',channelId,channel_id) as channel_id

, case when server_id <> '' then server_id

when zoneId <> '' then zoneId

else zone_id

end as zone_id

, uid,udid,resp,sdk_ver

, src_message

from ali_hk_biligame_op_dc.stage_op_jp_heartbeat_i_hr t1 --查询日本地区将tw改成jp

lateral view json_tuple(src_message,'method', 'now',
'uid','udid','gameId','game_id','channelId','channel_id','zone_id','zoneId','server_id','resp','sdk_ver')
t2 as method, now,
uid,udid,gameId,game_id,channelId,channel_id,zone_id,zoneId,server_id,resp,sdk_ver

where 1=1

and t1.ds = '2022-08-03' --查询日期

and t2.method in ('heartbeat')

) t3

where 1=1

and t3.game_id in ('7720') --查询的游戏id

and t3.uid in ('16097484') --查询的游戏mid,字段为uid实际为mid

-- and t3.channel_id in ({channel_id})

-- and t3.time between '2022-08-03 14:00:00' and '2022-08-03 14:10:00'

group by t3.ds,t3.game_id,t3.time;
```


查询结果如下

<DocImage src='sdkbitest/dd87a65a099c2c6a5b96d65112b60e95.png'></DocImage>

### 设备激活数据查询

**stage_op_jp_login_i_d：除繁体地区外所有海外平台地区的游戏SDK登录事件表**

**stage_op_tw_login_i_d：繁体地区游戏SDK事件表**


```
--设备激活（更改需要查询的日期，游戏id，设备的udid后查询）

select ds,t3.game_id,t3.channel_id,'设备激活' as scene,count(1) as
cnt,to_char(from_unixtime(cast(t3.now/1000 as bigint)),'yyyy-mm-dd hh:mi:ss') as
time

from (select t1.now,ds,t1.game_id,t1.channel_id

from ali_hk_biligame_op_dc.stage_op_jp_login_i_d t --查询日本地区将tw改成jp

lateral view json_tuple
(t.src_message,'method','game_id','uid','now','udid','channel_id') t1 as
method,game_id,uid,now,udid,channel_id

where ds = '2022-08-03' --查询日期

and method in ('activate')

and game_id = '7720' --查询的游戏id

and udid = 'a84b0490-5b71-4a72-947f-4ddd80906d1a')t3 --查询的设备udid

group by ds,t3.game_id,time,t3.channel_id;
```


查询结果如下

<DocImage src='sdkbitest/d3d5ad1f3e146465a1e9edfd72ee5afc.png'></DocImage>

### 下单及支付事件查询

**stage_op_jp_pay_i_d：除繁体地区外所有海外平台地区的游戏下单支付事件表**

**stage_op_tw_pay_i_d：繁体地区游戏的下单及支付事件表**


```
--下单、支付（更改需要查询的日期，游戏id , 游戏mid以及游戏地区的表后查询）

select t3.ds,t3.game_id,'下单' as scene, count(1) as cnt,t3.time as time

from (

select t1.ds,t2.now,to_char(from_unixtime(cast(t2.now/1000 as bigint)),
'yyyy-mm-dd hh:mi:ss') as time

, t2.method, t2.uid

, case when gameId != '' then gameId else game_id end as game_id

, case when channelId != '' then channelId else channel_id end as channel_id

, case when server_id != '' then server_id

when zoneId != '' then zoneId

else zone_id

end as zone_id

, nvl(orderNo,order_no) as order_no

, nvl(money,money_rmb) as money

, src_message

from ali_hk_biligame_op_dc.stage_op_jp_pay_i_d t1 --查询日本地区将tw改成jp

lateral view json_tuple(src_message,'method', 'now',
'uid','gameId','game_id','channelId','channel_id','zone_id','zoneId','server_id','resp','orderNo','order_no','outTradeNo','out_trade_no','rechargeOrder','money','money_rmb','moneyRMB','pay_money','payMode','pay_mode',
'orderStatus','order_status','is_sandbox','isSandbox','originMoney','origin_money')
t2 as method, now,
uid,gameId,game_id,channelId,channel_id,zone_id,zoneId,server_id,resp,orderNo,order_no,outTradeNo,out_trade_no,rechargeOrder,money,money_rmb,moneyRMB,pay_money,payMode,pay_mode,orderStatus,order_status,is_sandbox,isSandbox,originMoney,origin_money

where 1=1

and t1.ds = '2022-08-03' --查询的日期

and t2.method in ('addPayOrder','globalAddPayOrder','globalAddOrder')

) t3

where 1=1

and t3.time between '2022-08-03 00:00:00' and '2022-08-03 23:59:59' --查询的时间段

and game_id in (7720) --查询的游戏id

and uid in (16097484) --查询的游戏mid,字段为uid实际为mid

-- and channel_id in ({channel_id})

-- and t3.time between '{datetime_begin}' and '{datetime_end}'

group by t3.ds,t3.game_id,t3.time

union all

-- 支付

select t3.ds,t3.game_id,'支付成功' as scene, count(1) as cnt,t3.time as time

from (

select t1.ds,t2.now,to_char(from_unixtime(cast(t2.now/1000 as bigint)),
'yyyy-mm-dd hh:mi:ss') as time

, t2.method, t2.uid

, case when gameId != '' then gameId else game_id end as game_id

, case when channelId != '' then channelId else channel_id end as channel_id

, case when server_id != '' then server_id

when zoneId != '' then zoneId

else zone_id

end as zone_id

, nvl(orderNo,order_no) as order_no

, nvl(money,money_rmb) as money

, src_message

from ali_hk_biligame_op_dc.stage_op_jp_pay_i_d t1 --查询日本地区将tw改成jp

lateral view json_tuple(src_message,'method', 'now',
'uid','gameId','game_id','channelId','channel_id','zone_id','zoneId','server_id','resp','orderNo','order_no','outTradeNo','out_trade_no','rechargeOrder','money','money_rmb','moneyRMB','pay_money','payMode','pay_mode',
'orderStatus','order_status','is_sandbox','isSandbox','originMoney','origin_money')
t2 as method, now,
uid,gameId,game_id,channelId,channel_id,zone_id,zoneId,server_id,resp,orderNo,order_no,outTradeNo,out_trade_no,rechargeOrder,money,money_rmb,moneyRMB,pay_money,payMode,pay_mode,orderStatus,order_status,is_sandbox,isSandbox,originMoney,origin_money

where 1=1

and t1.ds = '2022-08-03' --查询的日期

and t2.method in ('recharge','globalPaidSuccess')

) t3

where 1=1

and game_id in ('7720') --查询的游戏id

and uid in ('16097484') --查询的游戏mid,字段为uid实际为mid

-- and channel_id in ({channel_id})

and t3.time between '2022-08-03 00:00:00' and '2022-08-03 23:59:59' --查询的时间段

group by t3.ds,t3.game_id,t3.time;
```


查询结果如下

<DocImage src='sdkbitest/63994b2793990e2fe8887c3e2f303601.png'></DocImage>

### SDK登录事件查询

**stage_op_jp_login_i_d：除繁体地区外所有海外平台地区的游戏SDK登录事件表**

**stage_op_tw_login_i_d：繁体地区游戏SDK事件表**


```
--其余事件（更改需要查询的日期，游戏id，游戏mid，时间段以及游戏地区的表后查询）

select t3.ds, t3.game_id,t3.method

, case when method in ('touristReg','touristLogin') then '游客注册'

when method in ('userLogin') then '账密登录'

when method in ('cacheLogin') then '自动登录'

when method in ('thirdAccountLogin') then '授权登录'

when method in ('bindAccount','promoteAccount','bindKomoeAccount'

,'bindThirdAccount','tourBind') then '游客升级'

when method in ('notifyZone') then '研发区服notifyzone'

when method in ('createrole') then '创角'

else '其他'

end as scene

,t3.pf_ver , t3.bd_id , t3.oaid,t3.imei , t3.mac , t3.android_id , t3.ip

,count(1) as cnt,t3.time

from (

select t1.ds,t2.method,t2.game_id,t2.uid

,t2.pf_ver,t2.bd_id,t2.oaid,t2.imei,t2.mac,t2.android_id,t2.ip

, to_char(from_unixtime(cast(t2.now/1000 as bigint)),'yyyy-mm-dd hh:mi:ss') as
time

from (

select src_message, ds

from ali_hk_biligame_op_dc.stage_op_jp_login_i_d --查询日本地区将tw改成jp

where ds = '2022-08-16' --查询日期

) t1

lateral view json_tuple(src_message,'method', 'now',
'uid','user_id','userId','app_id','gameId','game_id','channel_id','channelId','zone_id','zoneId','zoneNum','server_id','udid','resp','mid','rechargeMid','channel','pf_ver','bd_id',
'oaid', 'imei' , 'mac' , 'android_id' , 'ip' ,'timestamp') t2 as method, now,
uid,user_id,userId,app_id,gameId,game_id,channel_id,channelId,zone_id,zoneId,zoneNum,server_id,udid,resp,mid,rechargeMid,channel,pf_ver,bd_id,oaid,imei,mac,android_id,ip,timestamp

) t3

where 1=1

and t3.game_id in ('7720') --查询的游戏id

and (t3.uid in ('16218684')) --查询的游戏mid,字段为uid实际为mid

-- and t3.channel_id in ({channel_id})

and t3.time between '2022-08-16 10:00:00' and '2022-08-16 10:40:00' --查询的时间段

group by t3.ds,t3.game_id,t3.time

,t3.pf_ver, t3.method , t3.bd_id , t3.oaid,t3.imei , t3.mac , t3.android_id ,
t3.ip

, case when method in ('touristReg','touristLogin') then '游客注册'

when method in ('userLogin') then '账密登录'

when method in ('cacheLogin') then '自动登录'

when method in ('thirdAccountLogin') then '授权登录'

when method in ('bindAccount','promoteAccount','bindKomoeAccount'

,'bindThirdAccount','tourBind') then '游客升级'

when method in ('notifyZone') then '研发区服notifyzone'

when method in ('createrole') then '创角'

else '其他'

End;
```


查询结果如下

<DocImage src='sdkbitest/9cd6074423e7272e8098b67aeceeb29e.png'></DocImage>
