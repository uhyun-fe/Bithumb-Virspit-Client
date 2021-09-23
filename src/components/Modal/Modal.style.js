import styled from "styled-components";

// Styles
import { CenterFlexDiv } from "../../assets/styles/basic.style";

export const ModalArea = styled(CenterFlexDiv)`
   position: fixed;
   top: 0;
   left: 0;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);

   .modal {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 30px;
      width: 90%;
      max-width: ${(props) => props.width_percent + "px"};
      max-height: 500px;
      background: var(--white);
      overflow: auto;
      .top {
         align-items: flex-start;
         margin-bottom: 20px;
         h4 {
            font-size: 1.3em;
            width: 90%;
            word-break: break-all;
         }
         button {
            font-size: 1.3em;
            background: none;
         }
      }
      .contents {
         width: 100%;
      }
   }
`;
