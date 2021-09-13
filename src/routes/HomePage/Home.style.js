import styled from "styled-components";

// Styles
import { CenterColumnFlexDiv, LeftColumnFlexDiv } from "../../assets/styles/basic.style";

export const HomeContainer = styled(CenterColumnFlexDiv)`
   width: 100%;
`;

export const AdSection = styled(LeftColumnFlexDiv)`
   position: relative;
   padding: 0 50px;
   width: 100%;
   height: 300px;
   color: var(--white);
   font-size: 1.2em;
   border-radius: 30px;
   overflow: hidden;
   background-image: url(${(props) => props.bgImage});
   background-size: 100%;
   background-position: 50%;

   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
   }

   > * {
      z-index: 1;
   }

   h3 {
      font-size: 3em;
   }

   button {
      margin-top: 30px;
      padding: 11px 30px 9px;
      color: var(--white);
      font-weight: 700;
      border-radius: 10px;
      background: var(--main);
   }
`;
