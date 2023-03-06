import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const {title, subtitle} = props

  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      {/* subtitle不确定有没有 */}
     {/* 写代码方便查看 */}
     {/* <div className="subtitle">{subtitle}</div> */}
     {subtitle && <div className="subtitle">{subtitle}</div> }
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader
