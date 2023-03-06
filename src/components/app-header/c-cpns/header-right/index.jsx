import IconAvator from '@/assets/svg/icon-avator'
import IconGlobal from '@/assets/svg/icon-global'
import IconMenu from '@/assets/svg/icon-memu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] =useState(false)

  // 副作用代码
  useEffect(() => {
    // 把下面的箭头函数抽出来,用于清除副作用
    function windowClickHandle() {
       setShowPanel(false)
      }
    window.addEventListener("click",windowClickHandle, true)

    return () => {
      window.removeEventListener("click",windowClickHandle)
    }
   }, [])


  // 时间处理函数
  function profileClickHandle() {
    setShowPanel(true)
  }




  return (
    <RightWrapper>
      <div className="btns">
        {/* 开发中不太喜欢用button要重置样式 */}
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
           <IconGlobal/>
        </span>
       </div>  

      <div>
        <div className="profile" onClick={profileClickHandle}>
          <IconMenu/>
          <IconAvator/>

       {showPanel &&   (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item ">出租房源</div>
              <div className="item ">开展体验</div>
              <div className="item ">帮助</div>
            </div>
          </div>)}

        </div>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight