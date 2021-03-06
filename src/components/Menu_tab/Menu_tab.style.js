import styled from "styled-components";

// Styles
import { CenterFlexDiv } from "../../assets/styles/basic.style";

export const MenuTabBox = styled(CenterFlexDiv)`
   .back {
      margin: 30px 0;
      left: 150px;
      width: 89vw;
      height: 150px;
   }

   ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
   }

   li {
      margin: 0 25px 0 0;
      padding: 0 0 0 0;
      float: left;
      font-size: 25px;
      font-weight: 700;
      color: #999999;
      cursor: pointer;
   }

   li.selected,
   li:hover {
      color: var(--main);
      text-decoration: none;
      border-bottom: 3px solid var(--main);
   }
`;
