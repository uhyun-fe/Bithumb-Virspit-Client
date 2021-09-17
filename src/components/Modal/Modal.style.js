import styled from "styled-components";

// Styles
import { CenterFlexDiv } from "../../assets/styles/basic.style";

export const ModalArea = styled(CenterFlexDiv)`
   position: fixed;
   top: 0;
   left: 0;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);

   .content {
      width: 400px;
      max-height: 100px;
      background: var(--white);
      overflow: auto;
   }
`;
