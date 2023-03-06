// 第三方导入的
import React , {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { StrictMode } from 'react'
// import axios from 'axios'
import { ThemeProvider } from 'styled-components'
// redux2

// 自己的
import App from '@/App'
import 'normalize.css'
// antd----less
// import 'antd/dist/antd.less'
// antd--统一导入
import'@/assets/css/index.css'
// 统一导入css/less
// import '@/assets/css/index.less'

// redux2
import store from './store'
import { Provider } from "react-redux"
import theme from './assets/theme'
// axios.request({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get"
// }).then(res=> {
//   // console.log("res:", res.data)
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    {/* 注意标签s大写 */}
    <Suspense fallback="loading">
      {/* redux3 */}
      <Provider store={store}>
       <ThemeProvider theme={theme}>
         <HashRouter>
           <App/>
         </HashRouter>
       </ThemeProvider>
      </Provider>
    </Suspense>
  </StrictMode>
)
