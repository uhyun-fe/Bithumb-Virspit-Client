import styled from "styled-components";

// Styles
import { Button } from "../../assets/styles/basic.style";

export const CategoryItem = styled(Button)`
   padding: 16px 10% 14px;
   width: 100%;
   font-size: 1.2em;
   font-weight: 700;
   border-radius: 20px;
   text-align: left;
   background: var(--lightmain);
   &:not(:last-child) {
      margin-bottom: 5px;
   }
   &.selected,
   &:hover {
      color: var(--white);
      background: var(--main);
      opacity: 1;
      /* span::before {
         filter: invert(100);
      } */
   }
   span {
      display: flex;
      align-items: center;
      &::before {
         content: "";
         display: inline-block;
         margin-right: 5px;
         width: 15px;
         height: 15px;
         background: url(${(props) => props.image}) no-repeat;
         background-size: 100% 100%;
      }
   }
`;
