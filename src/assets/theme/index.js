// 这样改主题就很方便,比如文字大小(如果太多了就没必要)
// 还有哪些东西可以设置主题,小技巧可以去antdesign看
const theme = {
  // 主题区分,color对象,""
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "222"
  },
  mixin: {
    boxShadow: `transition: box-shadow 0.2s ease;
    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      } `
  }
       


}





export default theme



// const darkTheme = {}