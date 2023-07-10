import React, { useState, useRef, useEffect } from "react";
import { Tabs, Button, message } from "antd";
const { TabPane } = Tabs;
import "./styles.css";
import Api from "../../services/index";
import perfImg from "../../../static/perfdragon/perfdragon.png";

let { getVersionInfoFunc } = Api;

// perfdragon 下载路径
export const PERFDRAGON = 'https://qaq.com/static/public/PerfDragon/'

const DownApp = () => {

  const imgUrl = perfImg
  const otherVersionsUrl = 'https://qaq.com/static/public/PerfDragon'

  const [curVer, setCurVer] = useState('')
  const [curBuild, setCurBuild] = useState('')
  const [downUrlWindows, setDownUrlWindows] = useState('')
  const [downUrlMac, setDownUrlMac] = useState('')

  const items = [
    {
      label: 'Windows', key: '1', children:
        <Button
          onClick={() => downAppFunc('windows')}
          style={{ borderRadius: "20px", width: "160px", height: "40px", marginTop: "20px" }} type='primary'>
          Download(windows)
        </Button>
    },
    {
      label: 'macOS', key: '2', children:
        <Button
          onClick={() => downAppFunc('mac')}
          style={{ borderRadius: "20px", width: "160px", height: "40px", marginTop: "20px" }} type='primary'>
          Download(macOS)
        </Button>
    },
  ];

  useEffect(() => {
    getVersionInfoFunc().then(res => {
      console.log(res, 'fgg');
      try {
        if (res) {
          const downUrlWindows = PERFDRAGON + res?.version + `/perfdragon_${res?.version}_winx64.zip`
          const downUrlMac = PERFDRAGON + res?.version + `/perfdragon_${res?.version}_macOS.zip`
          setCurVer(res?.version)
          setCurBuild(res?.build)
          setDownUrlWindows(downUrlWindows)
          setDownUrlMac(downUrlMac)
        }
      } catch (error) {
        console.log(error, 'error');
        message.error('获取版本应用版本信息失败!')
      }
    })
  }, [])

  // 下载perfdrgon 测试包
  const downAppFunc = (curType) => {
    window.location.href = curType == 'windows' ? downUrlWindows : downUrlMac
  }

  return (
    <div>
      <div className="down_wrap">
        <div className="leftModule">
          <img style={{ width: "162px", height: "162px" }} src={imgUrl} alt="" />
          <span>Version: {curVer}</span>
          <span>Build: {curBuild}</span>
        </div>
        <div className="rightModule">
          <h2>Download PerfDragon</h2>
          <Tabs defaultActiveKey="1" animated={{ inkBar: false, tabPane: true }} items={items}></Tabs>
        </div>
      </div>
      <p className="down_bottom">
        <a style={{ fontSize: '15px' }} target='_blank' href={otherVersionsUrl}>Other versions</a>
      </p>
    </div>
  )
}

export default DownApp
