import styled from "styled-components";

// Styles
import { LeftColumnFlexDiv, LeftFlexDiv } from "../../assets/styles/basic.style";

export const SearchTopBox = styled(LeftColumnFlexDiv)`
   h2 {
      margin-bottom: 10px;
      font-size: 2em;
      font-weight: 500;
   }
   button {
      padding-top: 2px;
      width: 100px;
      height: 40px;
      border: 1px solid var(--lightgray);
      border-radius: 10px;
      background: var(--white);
      &.selected,
      &:hover {
         color: var(--white);
         border-color: var(--main);
         background: var(--main);
         opacity: 1;
      }
      &:not(:last-child) {
         margin-right: 10px;
      }
   }
   .total-count {
      margin: 30px 0 20px;
      font-size: 1.1em;
   }
`;

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
