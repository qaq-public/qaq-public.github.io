import React from 'react'
import './WeChatLink.less'

export const WeChatLink = (props) => {
  const { openId, openChatId, children } = props
  const larkLink =
    'https://applink.feishu.cn/client/chat/open' +
    (openId ? '?openId=' + openId : '?openChatId=' + openChatId)

  return (
    <a href={larkLink} target='_blank' {...props} className='name'>
      {children}
    </a>
  )
}
