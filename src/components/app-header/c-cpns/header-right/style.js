import styled from "styled-components";



export const RightWrapper = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
color: ${props => props.theme.text.primaryColor};

font-weight: 600;

.btns {
  display: flex;
 
  
  .btn {
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    border-radius: 22px;
    cursor: pointer;
    box-sizing: content-box;

    &:hover {
      background-color: #f5f5f5;
    }
  }

}

.profile {
  position: relative;
  display: flex;
  width: 77px;
  /* height: 42px;后面应该由高度撑起来 */
  margin-right: 24px;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: #fff;
  color: #999;
  cursor: pointer;
  
  /* transition: box-shadow 0.2s ease;
  &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    } */
    ${props => props.theme.mixin.boxShadow}

    /* pane下拉l切换面板 */
    .panel {
      position: absolute;
      top: 50px;
      right: 0;
      width: 240px;
      height: 200px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      
      .top, .bottom {
        padding: 10px,0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
}



`