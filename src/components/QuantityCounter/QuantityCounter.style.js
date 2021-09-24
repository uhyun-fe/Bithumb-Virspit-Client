import styled from "styled-components";

// Styles
import { CenterFlexDiv } from "../../assets/styles/basic.style";

export const Counter = styled(CenterFlexDiv)`
   height: 35px;
   border-radius: 5px;
   overflow: hidden;
   button {
      padding-top: 3px;
      width: 25%;
      height: 100%;
      color: var(--white);
      font-size: 1.3em;
      background: var(--darkgray);
   }
   input {
      width: 50%;
      height: 100%;
      font-size: 0.9em;
      text-align: center;
   }
`;
