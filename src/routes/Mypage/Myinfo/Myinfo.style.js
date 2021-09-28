import styled from "styled-components";

import { LeftColumnFlexDiv, LeftFlexDiv } from "../../../assets/styles/basic.style";

export const MyinfoForm = styled(LeftColumnFlexDiv)
`
margin : 25px 0 0 30px;
display : flex;
   h2 {
      margin-bottom: 20px;
      width: 300px;
   }
   max-width: 1000px;
   > * {
    width: 100%;
    }    
`;

export const User_Form = styled(LeftColumnFlexDiv)
`
border-style : solid;
border-width : 2px;
border-color : #F69420;
padding : 90px 90px 70px 90px;
width : 100%;

`;

export const Left_Flex_Div = styled(LeftFlexDiv)
`
   padding-left : 5px;
   width : 81%;
`;

export const InputLabel = styled.label`
   margin : 0 0 30px 0;
   padding : 0 20px 0 0;
   color: var(--ninegray);
   font-size: 1.2em;
   justify-content: space-between;
   width : 100%;

   display: flex;
   align-items: center;
   flex-wrap: wrap;
   
   input {
    &:not([type="radio"]) {
       padding: 0 20px;
       width: 80%;
       height: 45px;
       font-size: 1em;
       border-radius: 10px;
       background: var(--lightgray);

       &:focus {
          border: 2px solid var(--main);
          background: var(--white);
       }
    }
 }
   p {
      margin-top: 5px;
      padding: 0 10px;
      color: var(--red);
      font-size: 0.8em;
      font-weight: 300;
      text-align: left;
      margin-left : auto;

   }

   button {
       margin: 15px 10px 0 5px;
       margin-left : auto;
       padding : 8px 0 5px 0;
       width: 120px;
       color: white;
       font-size: inherit;
       font-weight: 500;
       background: var(--main);
       border-radius: 10px;    
    }

    span {
        padding-left : 15px;
        color : black;
        width : 80%;
    }
`;

export const RadioLabel = styled.label`
   display: flex;
   align-items: center;
   margin: 10px 0 0 20px;
   cursor: pointer;
   input {
      margin-right: 5px;
      position: relative;
      top: -2px;
   }
   color : black;
`;

