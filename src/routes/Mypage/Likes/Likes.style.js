import styled from "styled-components";

import { LeftColumnFlexDiv, LeftFlexDiv } from "../../../assets/styles/basic.style";

export const LikesForm = styled(LeftColumnFlexDiv)
`
margin : 25px 0 0 30px;
display : flex;
   h2 {
      margin-bottom: 20px;
      width: 300px;
   }
   max-width: 1000px;
   > * {
    width: 100%;
    }    
`;

export const ListItemBox = styled(LeftFlexDiv)`
   flex-wrap: wrap;
`;