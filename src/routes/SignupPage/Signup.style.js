import styled from "styled-components";

// Styles
import { CenterColumnFlexDiv } from "../../assets/styles/basic.style";

export const SignupForm = styled(CenterColumnFlexDiv)`
   padding-top: 50px;
   width: 100%;
   max-width: 550px;
   > * {
      width: 100%;
   }
   h2 {
      margin-bottom: 30px;
      width: 300px;
   }
   > button {
      margin: 30px 0 10px;
      height: 65px;
      color: var(--white);
      font-family: var(--en);
      font-size: 2em;
      letter-spacing: 0.1em;
      border-radius: 15px;
      background: var(--main);
   }
   p {
      text-align: right;
      color: var(--ninegray);
      a {
         color: inherit;
         font-weight: 700;
      }
   }
`;

export const InputLabel = styled.label`
   margin-bottom: 20px;
   color: var(--ninegray);
   font-size: 1.2em;
   font-weight: 700;
   input {
      &:not([type="radio"]) {
         margin-top: 5px;
         padding: 0 20px;
         width: 100%;
         height: 65px;
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
`;

export const CheckBoxLabel = styled.label`
   display: inline-flex;
   align-items: center;
   margin-bottom: 5px;
   color: var(--black);
   input {
      margin-right: 10px;
   }
   button {
      margin: 0 0 0 5px;
      width: auto;
      height: auto;
      color: var(--main);
      font-size: inherit;
      font-weight: 500;
      background: none;
   }
`;
