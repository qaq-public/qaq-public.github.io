import axios from 'axios';
import { openSchema, staticPerfdragonUrl } from '/src/utils/index';
import { message } from 'antd'
let beforeHandler = (res) => {
  let data = res.data;

  if (res.hasOwnProperty('status')) {
    if (res.status !== 200) {
      message.error('请求接口失败: ' + data.message);
      return Promise.reject();
    }
    return data;
  }
  if (res.hasOwnProperty('code')) {
    if (0 !== data.code) {
      message.error('请求接口失败: ' + data.message);
      return Promise.reject();
    }
    return data;
  }
};

let errorHandler = (e) => {
  if (!e) {
    return;
  }
  message.error({ message: '接口请求失败: ' + e.message });
};

let apiWrapper = (p) => {
  return p.then(beforeHandler).catch(errorHandler);
};

let Api = {
  // 获取用户列表
  openLanchUser: (data) => {
    return apiWrapper(axios.post(openSchema, data));
  },

  // 获取 perfdragon 帮助中心的 下载版本号
  getVersionInfoFunc: () => {
    return apiWrapper(axios.get(staticPerfdragonUrl, {
      params: {
        token: 1
      }
    }));
  }
};

export default Api;
