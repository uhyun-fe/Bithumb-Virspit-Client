import styled from "styled-components";

// Styles
import { CenterColumnFlexDiv } from "../../assets/styles/basic.style";

export const LoginForm = styled(CenterColumnFlexDiv)`
   padding-top: 50px;
   width: 90%;
   max-width: 550px;
   > * {
      width: 100%;
   }
   h2 {
      margin-bottom: 30px;
      width: 400px;
   }
   input {
      padding: 0 20px;
      margin-bottom: 10px;
      height: 70px;
      border-radius: 15px;
      background: var(--lightgray);
      &:focus {
         border: 2px solid var(--main);
         background: var(--white);
      }
   }
   button {
      margin: 30px 0 10px;
      height: 70px;
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
