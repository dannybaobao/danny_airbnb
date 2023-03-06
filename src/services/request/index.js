import axios from "axios"
import {BASE_URL, TIMEOUT} from "./config"

 class dannyRequest {
  constructor(baseURL,timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    },err => {
      return err
    })
  }


  // 2.请求方法
request(config) {
    return this.instance.request(config)
  }

get(config) {
  return this.request({...config, method:"get"})
}

post(config) {
  return this.request({...config, method:"post"})
}

}



export default new dannyRequest(BASE_URL, TIMEOUT)
// 1......更多实例