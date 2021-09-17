import styled from "styled-components";

// Styles
import { LeftColumnFlexDiv, LeftFlexDiv, SpaceBetweenFlexDiv } from "../../assets/styles/basic.style";

export const AdSection = styled(LeftColumnFlexDiv)`
   position: relative;
   margin-bottom: 30px;
   padding: 0 50px;
   height: 300px;
   color: var(--white);
   font-size: 1.2em;
   border-radius: 30px;
   overflow: hidden;
   background-image: url(${(props) => props.bgImage});
   background-size: 100%;
   background-position: 50%;

   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
   }

   > * {
      z-index: 1;
   }

   h3 {
      font-size: 3em;
   }

   button {
      margin-top: 30px;
      padding: 11px 30px 9px;
      color: var(--white);
      font-weight: 700;
      border-radius: 10px;
      background: var(--main);
   }
`;

export const MainSection = styled(LeftFlexDiv)`
   align-items: flex-start;
`;

export const CategoryBox = styled.div`
   margin-right: 20px;
   width: 20%;
   min-width: 150px;
`;

export const ListTitleBox = styled(LeftColumnFlexDiv)`
   margin-bottom: 20px;
   h2 {
      margin-bottom: 10px;
      font-size: 3em;
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
`;

export const ListItemBox = styled(LeftFlexDiv)`
   flex-wrap: wrap;
`;
