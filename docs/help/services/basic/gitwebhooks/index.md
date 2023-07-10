---
label: Git Webhooks
sidebar_position: 6
---
# gitwebhooks

import DocCardList from '@theme/DocCardList';

<DocCardList />

import {WeChatLink} from "/src/components/index.js"

* 通过git webhooks调用处理git的push、merge request请求，非阻塞性
*  检查以commit，或merge request为单位的提交备注格式规范，格式规范：【标题】表单链接，可通过TAPD表单右上角一键复制标题与链接
*  根据链接中的参数，检查项目中是否存在该表单，即链接中的项目ID、表单类型、表单ID是否正确
*  根据配置，检查TAPD表单状态是否允许提交，并将commit备注，或合并请求时的title + description + 最后一次commit备注整合后，同步到TAPD表单评论
*  如果commit备注，或合并请求时的title备注，填写多个相同的TAPD表单链接，则以第一个为准
*  将违规行为通过企业微信推送给请求发起人和项目配置信息中的企业微信额外发送人
*  将合规的commit或merge request的信息，同步到TAPD表单评论
*  根据配置选择性监控指定分支，如果不填，则监控所有分支
*  备注的表单链接后，紧跟随(不要有任何字符)填写关键字【完成】，则此链接的TAPD表单状态会变更为配置中指定的完成状态，并将处理人字段变更为表单创建人，且企业微信推送是否变更成功
*  在备注中任意位置填写【合并】关键字，则会对此次commit向指定(默认master)分支发起合并请求，并且会企业微信推送给提交人
*  如果提示没有项目访问权限，请联系当前项目的项目管理员，在后台管理平台-成员管理，修改或者添加项目成员角色为"项目管理员"即可。

> 更多问题请联系：<WeChatLink name='李白'>李白</WeChatLink>