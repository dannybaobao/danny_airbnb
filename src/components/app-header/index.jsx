// 这个名字导入时就不用写了,也可以叫其它比如app-header,但要写
// 就可以来这里封装了
import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'


const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </HeaderWrapper>
  )
})

export default AppHeader