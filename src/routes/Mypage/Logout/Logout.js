import React from "react";
import styled from "styled-components";
import cookie from "react-cookies";

// Contents
import pathname from "../../../assets/contents/pathname";
import cookie_text from "../../../assets/contents/cookie_text";
import logo from "../../../assets/images/logo.png";

// Styles
import { Button, CenterColumnFlexDiv } from "../../../assets/styles/basic.style";

const Logout = () => {
   // 로그아웃
   function logout() {
      if (!window.confirm("로그아웃하시겠습니까?")) return;
      cookie.remove(cookie_text.user_token, { path: "/" });
      cookie.remove(cookie_text.user_refresh_token, { path: "/" });
      window.location.href = pathname.home;
   }

   return (
      <LogoutBox>
         <h2>
            <img src={logo} alt="virspit logo" />
         </h2>
         <strong>{"김철수"}</strong>
         <p>{"test@teset.com"}</p>
         <Button onClick={logout}>Logout</Button>
      </LogoutBox>
   );
};

const LogoutBox = styled(CenterColumnFlexDiv)`
   padding: 100px 0 50px;
   h2 {
      margin-bottom: 30px;
      width: 200px;
   }
   strong {
      color: var(--main);
      font-size: 2em;
   }
   p {
   }
   button {
      margin-top: 30px;
      width: 300px;
      height: 50px;
      color: var(--white);
      font-weight: 700;
      letter-spacing: 1px;
      border-radius: 10px;
      background: var(--main);
   }
`;

export default Logout;
