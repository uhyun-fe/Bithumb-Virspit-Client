import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Button, CenterColumnFlexDiv, CenterFlexDiv } from "../../assets/styles/basic.style";
import { Container } from "./TopNav.style";

// Images & Icons
import logoImage from "../../assets/images/logo.png";
import likeIcon from "../../assets/icons/like.png";

// 상단바
const TopNav = ({ is_login }) => {
   return (
      <Container>
         {/* 로고 */}
         <h1>
            <Link to="/">
               <CenterFlexDiv>
                  <img src={logoImage} alt="virspit logo" />
               </CenterFlexDiv>
            </Link>
         </h1>

         {/* 검색바 */}
         <CenterFlexDiv className="search-bar">
            <input type="text" placeholder="검색" />
            <Button />
         </CenterFlexDiv>

         {/* 버튼 영역 */}
         {is_login ? (
            <CenterFlexDiv className="button-area logined">
               <Link to="/mypage">
                  <Button className="like">
                     <img src={likeIcon} alt="liked product" />
                  </Button>
               </Link>
               <Link to="/mypage">
                  <Button>my</Button>
               </Link>
            </CenterFlexDiv>
         ) : (
            <CenterFlexDiv className="button-area">
               <Link to="/login">
                  <Button>Login</Button>
               </Link>
               <Link to="/signup">
                  <Button>Sign Up</Button>
               </Link>
            </CenterFlexDiv>
         )}

         {/* 사이드메뉴 */}
         <Button className="toggle" />
         <CenterColumnFlexDiv className="side-menu">sidemenu</CenterColumnFlexDiv>
      </Container>
   );
};

export default TopNav;
