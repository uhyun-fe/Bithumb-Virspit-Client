import styled from "styled-components";

// Styles
import { CenterFlexDiv, LeftColumnFlexDiv } from "../../assets/styles/basic.style";

export const InfoBox = styled.div`
   display: flex;
   margin-bottom: 50px;
   width: 100%;
`;

export const ImageSection = styled(CenterFlexDiv)`
   align-items: flex-start;
   /* button {
      margin-right: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--lightgray);
   } */
   .image-box {
      position: relative;
      padding-bottom: 85%;
      width: 55%;
      height: 0;
      border-radius: 30px;
      box-shadow: 0 10px 13px var(--darkgray);
      overflow: hidden;
      img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         transition: 0.2s ease-in-out;
      }
   }
`;

export const SummarySection = styled(LeftColumnFlexDiv)`
   justify-content: space-between;
   font-size: 1.2em;
   h2 {
      margin-bottom: 10px;
      font-size: 2em;
   }
   .category {
      color: var(--darkgray);
   }
   .desc {
      margin-bottom: 20px;
   }
   .counter-box {
      padding: 4%;
      margin-bottom: 20px;
      color: var(--sixgray);
      border-radius: 10px;
      background: var(--lightgray);
      > strong {
         display: flex;
         align-items: center;
         padding-top: 2px;
         width: 75%;
         font-size: 1.2em;
         span {
            margin-left: 10px;
            font-size: 0.8em;
            font-weight: 500;
         }
      }
      > div {
         width: 25%;
         min-width: 100px;
      }
      > span {
         padding-top: 2px;
         min-width: 100px;
         font-size: 0.9em;
      }
   }
   .buy-button {
      padding: 20px 15% 18px;
      min-width: 150px;
      color: var(--white);
      font-size: 1.2em;
      font-weight: 700;
      letter-spacing: 2px;
      border-radius: 20px;
      background: var(--middlegray);
      &.possible {
         background: var(--main);
      }
   }
   .price {
      strong {
         margin-right: 10px;
         font-size: 2em;
         font-weight: 700;
      }
   }
   .login-guide {
      margin-top: 10px;
      color: var(--main);
      font-size: 0.9em;
      button {
         color: inherit;
         font-size: 1em;
         font-weight: 700;
         background: none;
      }
   }
`;

export const PaymentModal = styled.div`
   details {
      margin-bottom: 20px;
      summary {
         margin-bottom: 5px;
         font-size: 1.2em;
         font-weight: 700;
         cursor: pointer;
      }
      > div {
         font-size: 0.9em;
      }
   }
   button {
      width: 100%;
      height: 45px;
      color: var(--white);
      background: var(--main);
   }
`;

export const DoneModal = styled.div`
   text-align: center;
   p {
      margin: 20px 0;
   }
   button {
      margin: 0 5px;
      padding: 11px 15px 9px;
      color: var(--white);
      font-size: 1em;
      border-radius: 5px;
      background: var(--main);
      &:first-child {
         color: var(--sixgray);
         background: var(--middlegray);
      }
   }
`;
