import styled from "styled-components";

// Styles
import { CenterColumnFlexDiv } from "../../assets/styles/basic.style";

export const LoginForm = styled(CenterColumnFlexDiv)`
   padding-top: 50px;
   max-width: 550px;
   > * {
      width: 100%;
   }
   h2 {
      margin-bottom: 30px;
      width: 300px;
   }
   input {
      padding: 0 20px;
      margin-bottom: 10px;
      height: 65px;
      border-radius: 15px;
      background: var(--lightgray);
      &:focus {
         border: 2px solid var(--main);
         background: var(--white);
      }
   }
   button {
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

export const CheckBoxLabel = styled.label`
   display: inline-flex;
   align-items: center;
   margin-bottom: 5px;
   color: var(--black);
   input {
      margin-right: 10px;
      margin-bottom: 0;
      &:focus {
         border: 1px solid var(--darkgray);
      }
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
