import styled from "styled-components";
import { CenterColumnFlexDiv } from "../../assets/styles/basic.style";

export const Container = styled(CenterColumnFlexDiv)`
   padding: 50px;
   border-top: 2px solid var(--lightgray);
   h2 {
      margin-bottom: 10px;
      width: 150px;
   }
   p {
      font-weight: 300;
   }
`;
