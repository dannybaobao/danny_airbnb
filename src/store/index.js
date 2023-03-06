// redux1
import { configureStore } from '@reduxjs/toolkit'
// redux5, homeReducer是别名
import homeReducer from './modules/home'
// 统一在entire下index.js了
import entireReducer from './modules/entire'

const store = configureStore({
  // configureStore支持不管是通过哪种方式,只要给reducer
  reducer: {
    // createslice
    home: homeReducer,
    // 普通方式
    entire: entireReducer,
  },
})

export default store
