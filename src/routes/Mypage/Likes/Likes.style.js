import styled from "styled-components";

import { LeftFlexDiv } from "../../../assets/styles/basic.style";

export const ListItemBox = styled(LeftFlexDiv)`
   flex-wrap: wrap;
   margin-bottom: 30px;
   .no-item {
      padding: 50px 0;
      width: 100%;
      text-align: center;
      color: var(--main);
      font-size: 1.2em;
   }
`;

export const TotalCount = styled.div`
   margin-bottom: 20px;
   width: 100%;
   font-size: 1.1em;
`;
