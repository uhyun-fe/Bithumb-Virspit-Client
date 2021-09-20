import styled from "styled-components";

// Styles
import { CenterFlexDiv, CenterColumnFlexDiv } from "../../assets/styles/basic.style";

// Icons
import likeIcon from "../../assets/icons/like.png";

export const Card = styled(CenterFlexDiv)`
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
   &:hover {
      img {
         top: -10%;
         left: -10%;
         width: 120%;
         height: 120%;
      }
      > div {
         opacity: 1;
      }
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

export const HoverBox = styled(CenterColumnFlexDiv)`
   position: absolute;
   top: 0;
   left: 0;
   padding: 20px;
   width: 100%;
   height: 100%;
   color: var(--white);
   font-size: 1.3em;
   font-weight: 700;
   background: rgba(0, 0, 0, 0.8);
   transition: 0.2s ease-in-out;
   opacity: 0;
   strong {
      font-size: 1.5em;
   }
   p:first-of-type {
      margin: 20px 0;
      font-size: 1em;
      font-weight: 500;
   }
`;

export const Like = styled(CenterFlexDiv)`
   position: absolute;
   bottom: 20px;
   left: 20px;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: var(--darkgray);
   transition: 0.2s ease-in-out;
   cursor: pointer;
   &::before {
      content: "";
      position: relative;
      top: 1px;
      width: 40%;
      height: 40%;
      background-image: url(${likeIcon});
      background-size: 100% 100%;
      filter: invert(100);
   }
   &.is_like {
      background: var(--main);
   }
`;
