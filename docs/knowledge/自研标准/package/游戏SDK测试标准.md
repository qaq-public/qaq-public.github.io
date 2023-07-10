import { WeChatLink, DocImage } from "/src/components/index.js"

# 游戏SDK测试标准

## Bili-SDK测试标准

1. 完成SDK接入测试，产出对应的静态自检、动态自检文档，结果均为通过| P0 | 15D |

    * 中台测试：自研QA中台对接人<WeChatLink name='莫得'>莫得</WeChatLink>

2. SDK数据上报内容正确通过| P0 | 15D |

    * 中台测试：自研QA中台对接人<WeChatLink name='莫得'>莫得</WeChatLink>

3. SDK常规检查项通过| P0 | 15D |

    * 中台测试：自研QA中台对接人<WeChatLink name='莫得'>莫得</WeChatLink>


*注意此处（包括下文）Bili-SDK代表B站游戏SDK，其中包括bili-SDk,komoe-SDk,bhk-SDK,bilijp-SDK，渠道-SDK*

[SDK测试流程](https://qaq.com/docs/services/solution/flow/SDK测试流程)

[SDK数据查询流程](https://qaq.com/docs/services/solution/flow/SDK数据查询流程)

[SDK合规检测流程](https://qaq.com/docs/services/solution/flow/SDK%E5%90%88%E8%A7%84%E6%A3%80%E6%B5%8B%E6%B5%81%E7%A8%8B)


## Bili-SDK版本要求

1. Android_SDK版本、IOS_SDK、服务器SDK与与运营给到的版本中一致| P0 | 15D |


## Bili-渠道SDK测试

1. 完成所有渠道SDK测试用例| P0 | 15D |

    * 中台测试：自研QA中台对接人<WeChatLink name='莫得'>莫得</WeChatLink>

## 第三方SDK支持的版本

1. 游戏中所有的SDK支持的最低位数与SDK支持的手机最低系统版本需要支持游戏本身所支持最低位数与系统版本| P0 | 15D |

2. 整理现有使用的第三方SDK确认版本号以及SDK内容| P0 | 15D |

## 第三方SDK自身功能

1. 达到对应SDK的功能要求，实现功能，无功能BUG| P0 | 15D |

2. 接入SDK后无兼容问题| P0 | 15D |

3. 接入SDK后无性能问题| P0 | 15D |

## 第三方SDK压力标准

1. 使用第三方SDK时，如有服务器交互情况，例如实时语音等等SDK、登录SDK。需要考虑SDK方承压| P0 | 15D |
