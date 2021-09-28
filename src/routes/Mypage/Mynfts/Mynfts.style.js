import styled from "styled-components";

import { CenterFlexDiv, LeftFlexDiv } from "../../../assets/styles/basic.style";

export const TotalCount = styled.div`
   margin-bottom: 20px;
   width: 100%;
   font-size: 1.1em;
`;

export const ListItemBox = styled(LeftFlexDiv)`
   flex-wrap: wrap;
`;

export const MyCard = styled(CenterFlexDiv)`
   position: relative;
   margin-bottom: 2%;
   padding-bottom: ${(props) => (props.line_count === 3 ? "52%" : "38%")};
   width: ${(props) => (props.line_count === 3 ? "32%" : "23.5%")};
   height: 0;
   border-radius: 20px;
   overflow: hidden;
   cursor: pointer;
   &:not(:nth-child(${(props) => (props.line_count === 3 ? "3n" : "4n")})) {
      margin-right: 2%;
   }
   img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.2s ease-in-out;
   }
`;
