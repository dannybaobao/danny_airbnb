import styled  from "styled-components";
// import "src/assets/css/variables.less"


export const LeftWrapper = styled.div`
   flex: 1;
   //  为了让放上去手掌范围不要太大,原本div
   display: flex;
   align-items: center;
   /* 提供主题方式一color: var(--primaryColor); */

   /* 提供主题方式二themeprovider */
   color: ${props => props.theme.color.primaryColor };

   .logo {
     margin-left: 24px;
     cursor: pointer;
   }
 
 
 
 
 
 `