// 使用RTK
// redux4
import { getHomeGoodPriceData } from "@/services";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchHomeMultidataAction = createAsyncThunk(
  "fetchdata",
  async(payload) => {
    // 直接调dannuRequest发送网络请求
    // 或者进一步封装,这里是axios的promise
    // getHomeGoodPriceData().then(res => {
    //   console.log(res)
    // })
    // async await
    const res = await getHomeGoodPriceData()
    return res
  }
)



const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrinceState: []
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPrinceState = payload
    }
  },
  extraReducers: {
    [fetchHomeMultidataAction.fulfilled] (state,{payload}) {
      state.goodPriceInfo = payload
    }
  }
})

export const {changeGoodPriceInfoAction} = homeSlice.actions


export default homeSlice.reducer