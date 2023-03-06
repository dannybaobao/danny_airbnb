import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomWrapper } from './style'

const SectionRooms = memo((props) => {

  const {roomList = []} = props
  return (
  <RoomWrapper >
    {
      // goodPriceInfo.list?.slice(0,8)?.map(item => {
      //   一样的效果但是用下面的独立的组件return <li key={item.id}>{item.name}</li>
      //   return <RoomItem itemData={item} key={item.id}/>
      // })

      roomList?.slice(0,8).map(item => {
        return <RoomItem itemData={item} key={item.id}/>
      })
    }
  </RoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
