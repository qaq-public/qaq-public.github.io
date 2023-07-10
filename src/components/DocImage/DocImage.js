import React, { useState } from "react";
import { Image } from "antd";

export const DocImage = (props) => {
  const { src } = props;
  let url = src.includes('http') ? src : (require("../../../static/" + src).default)
  // 封装成组件为了方便引入地址只需要提供static下的文件路径即可
  // 且方便以后统一修改组件细节
  return <Image src={url} />;
};
