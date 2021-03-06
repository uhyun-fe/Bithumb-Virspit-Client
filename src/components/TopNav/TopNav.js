import React, { useState } from "react";
import { Link } from "react-router-dom";

// Contents
import pathname, { types } from "../../assets/contents/pathname";

// Styles
import { Button, CenterColumnFlexDiv, CenterFlexDiv } from "../../assets/styles/basic.style";
import { Container } from "./TopNav.style";

// Images & Icons
import logoImage from "../../assets/images/logo.png";
import likeIcon from "../../assets/icons/like.png";

// 상단바
const TopNav = ({ is_login, history }) => {
   const [keyword, setKeyword] = useState("");
   const [state, setState] = useState({ focused: false });
   return (
      <Container>
         {/* 로고 */}
         <h1>
            <Link to={pathname.home}>
               <CenterFlexDiv>
                  <img src={logoImage} alt="virspit logo" />
               </CenterFlexDiv>
            </Link>
         </h1>

         {/* 검색바 */}
         <CenterFlexDiv className={`search-bar${state.focused ? " focused" : ""}`}>
            <input
               type="text"
               placeholder="검색"
               value={keyword}
               onChange={({ target: { value } }) => setKeyword(value)}
               onKeyPress={({ key }) => {
                  if (key === "Enter") {
                     history.push(pathname.search(keyword));
                     setKeyword("");
                  }
               }}
               onFocus={() => setState({ ...state, focused: true })}
               onBlur={() => setState({ ...state, focused: false })}
            />
            <Button onClick={() => keyword && history.push(pathname.search(keyword))} />
         </CenterFlexDiv>

         {/* 버튼 영역 */}
         {is_login ? (
            <div className="button-area logined">
               <Link to={pathname.mypage(types.likes)}>
                  <Button className="like">
                     <img src={likeIcon} alt="liked product" />
                  </Button>
               </Link>
               <Link to={pathname.mypage(types.mynfts)}>
                  <Button>my</Button>
               </Link>
            </div>
         ) : (
            <div className="button-area">
               <Link to={pathname.login}>
                  <Button>Login</Button>
               </Link>
               <Link to={pathname.signup}>
                  <Button>Sign Up</Button>
               </Link>
            </div>
         )}

         {/* 사이드메뉴 */}
         <Button className="toggle" />
         <CenterColumnFlexDiv className="side-menu">sidemenu</CenterColumnFlexDiv>
      </Container>
   );
};

export default TopNav;
