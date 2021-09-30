import styled from "styled-components";

import { LeftColumnFlexDiv, LeftFlexDiv } from "../../../assets/styles/basic.style";

export const MyinfoForm = styled(LeftColumnFlexDiv)`
   margin-top: 30px;
   h2 {
      margin-bottom: 20px;
      width: 300px;
      font-size: 2em;
   }
`;

export const User_Form = styled(LeftColumnFlexDiv)`
   padding: 50px;
   margin-bottom: 50px;
   border: 2px solid var(--main);
   h3 {
      margin-bottom: 20px;
      font-size: 1.5em;
   }
   button {
      margin-top: 15px;
      margin-left: auto;
      padding: 8px 0 5px 0;
      width: 120px;
      height: 35px;
      color: var(--white);
      font-size: inherit;
      font-weight: 500;
      background: var(--main);
      border-radius: 10px;
   }
`;

export const Left_Flex_Div = styled(LeftFlexDiv)`
   padding-left: 5px;
   width: 81%;
`;

export const InputLabel = styled.label`
   margin-bottom: 20px;
   color: var(--ninegray);
   font-size: 1.2em;
   justify-content: space-between;
   width: 100%;
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
      margin-left: auto;
   }
   span {
      color: var(--black);
      width: 80%;
   }
`;

export const RadioLabel = styled.label`
   display: flex;
   align-items: center;
   margin: 10px 0 0 20px;
   color: var(--black);
   cursor: pointer;
   input {
      margin-right: 5px;
      position: relative;
      top: -2px;
   }
`;
