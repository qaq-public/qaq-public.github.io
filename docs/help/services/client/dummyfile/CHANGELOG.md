---
sidebar_position: 2
---
# 更新日志

import {TimeLine} from "/src/components/index.js"

`QAQ` 遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

## 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

## 🔨 更新日志的图标展示及对应含义

- 🐞 bug修复
- 🆕 需求开发
- ⚡ 功能优化
- 💄 样式问题修复
- 🔥 样式调整 
- 🤖 修复定义或者纯后端代码
- 🏴 🌐 语言问题
- 🛠 去除无用
- 🚧 移动文件

---

## 1.11.0

`2022-11-10`
- 🔥 Upload 的 `listType` 属性添加 `picture-circle` 支持。
- 🔥 Anchor 组件新增 `direction` 属性，支持 vertical。
- 🆕 Tooltip 新增 `arrow` 属性用来改变箭头的显示状态和箭头是否指向目标元素的中心。
- 🆕 List 分页新增 `align` 配置。
