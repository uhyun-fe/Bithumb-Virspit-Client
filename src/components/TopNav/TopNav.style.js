import styled from "styled-components";

// Styles
import { SpaceBetweenFlexDiv } from "../../assets/styles/basic.style";
// Icons
import searchIcon from "../../assets/icons/search.png";
import toggleIcon from "../../assets/icons/toggle.png";

export const Container = styled(SpaceBetweenFlexDiv)`
   h1 {
      width: 170px;
   }
   .search-bar {
      padding: 8px 20px;
      width: auto;
      border-radius: 10px;
      border: 2px solid var(--lightgray);
      background: var(--lightgray);
      &.focused {
         border: 2px solid var(--main);
         background: var(--white);
      }
      input {
         width: 500px;
         height: 30px;
         background: none;
      }
      button {
         position: relative;
         top: -2px;
         margin-left: 5px;
         width: 15px;
         height: 15px;
         background-image: url(${searchIcon});
         background-size: 100% 100%;
         background-color: inherit;
      }
   }
   .button-area {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 170px;
      a {
         button {
            padding: 10px;
            color: var(--white);
            font-size: 1em;
            font-family: var(--en);
            border-radius: 10px;
         }
         &:first-child {
            button {
               margin-right: 10px;
               background: var(--main);
            }
         }
         &:last-child {
            button {
               background: var(--black);
            }
         }
      }
      &.logined {
         button {
            padding: 0;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            img {
               position: relative;
               top: 4px;
               width: 17px;
               filter: invert(100);
            }
         }
      }
   }
   .toggle {
      display: none;
      width: 40px;
      height: 40px;
      background-image: url(${toggleIcon});
      background-size: 100%;
   }
   .side-menu {
      display: none;
   }
   @media only screen and (max-width: 1024px) {
      .search-bar,
      .button-area {
         display: none;
      }
      .toggle {
         display: block;
      }
   }
`;
