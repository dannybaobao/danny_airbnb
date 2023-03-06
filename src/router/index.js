// views里页面分好,在这里配置路由
// 注意记得导入react
import React from "react"
import { Navigate } from "react-router-dom"

// 页面懒加载
// 这样导入不会懒加载
// import Home from '@/views/home'
// 2
const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  // 3.重定向
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  //1
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
  {
    path: "/entire",
    element: <Entire/>,
  },
    
]

export default routes
