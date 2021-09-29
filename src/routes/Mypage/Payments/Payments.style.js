import styled from "styled-components";

import { LeftFlexDiv } from "../../../assets/styles/basic.style";

export const TotalCount = styled.div`
   margin-bottom: 20px;
   width: 100%;
   font-size: 1.1em;
`;

export const SearchBox = styled(LeftFlexDiv)`
   padding: 20px 30px;
   margin-bottom: 50px;
   border: 2px solid var(--main);
   border-radius: 10px;
   h4 {
      width: 100px;
      font-size: 1.3em;
   }
   .search-input-box {
      input {
         padding: 0 10px;
         width: 200px;
         height: 35px;
         border: 1px solid var(--middlegray);
         border-radius: 10px;
         &:focus {
            border-color: var(--main);
         }
      }
      span {
         margin: 0 10px;
      }
   }
   button {
      padding-top: 2px;
      width: 80px;
      height: 35px;
      color: var(--white);
      border-radius: 5px;
      background: var(--main);
   }
`;

export const PaymentItemBox = styled(LeftFlexDiv)`
   align-items: stretch;
   padding: 20px;
   margin-bottom: 10px;
   border-radius: 10px;
   background: var(--lightgray);
   .image-box {
      width: 120px;
      height: 145px;
      border-radius: 20px;
      overflow: hidden;
      img {
         display: block;
         height: 100%;
      }
   }
   .product-info {
      padding: 0 20px;
      p:first-child {
         color: var(--sixgray);
      }
      p:last-child {
         font-size: 1.2em;
         span {
            margin-left: 10px;
            color: var(--darkgray);
            font-size: 0.8em;
         }
      }
      > strong {
         margin-bottom: 10px;
         font-size: 1.7em;
         a {
            color: inherit;
            transition: 0.1s ease-in-out;
            &:hover {
               opacity: 0.7;
            }
         }
      }
   }
   .payment-info {
      justify-content: space-between;
      align-items: flex-end;
      padding: 20px 10px;
      padding-left: 0;
      width: auto;
      min-width: 150px;
      p {
         color: var(--sixgray);
         font-size: 1.2em;
      }
      button {
         color: var(--main);
         font-size: 1.2em;
         font-weight: 700;
         background: none;
      }
   }
`;
