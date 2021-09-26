import styled from "styled-components";

// Styles
import { CenterColumnFlexDiv } from "../../assets/styles/basic.style";

export const TableArea = styled(CenterColumnFlexDiv)`
   border-top: 2px solid var(--darkgray);
   .tr {
      align-items: stretch;
      font-size: inherit;
      border-bottom: 1px solid var(--darkgray);
      span {
         display: inline-block;
         padding: 10px;
         word-break: break-all;
      }
      .th {
         width: 100px;
         min-width: 100px;
         font-weight: 700;
         background: var(--lightgray);
      }
   }
`;
