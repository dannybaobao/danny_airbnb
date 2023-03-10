import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'








import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeMultidataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'



const Home = memo(() => {
  // 从redux中获取数据
const {goodPriceInfo} = useSelector((state) => ({
  goodPriceInfo: state.home.goodPriceInfo
}), shallowEqual)
  


// 派发异步的事件,发起网络请求
const dispatch =useDispatch()
useEffect(() => {
  dispatch(fetchHomeMultidataAction("xxx"))
}, [dispatch])



  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
       <div className="good-price">
       <SectionHeader title={goodPriceInfo?.title}/>
       {/*重构: ul,li抽出去封装成一个组件 */}
       <SectionRooms roomList={goodPriceInfo?.list}/>
       </div>
      </div>
   </HomeWrapper>
  )
})

export default Home