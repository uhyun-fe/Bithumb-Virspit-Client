import React from "react";
import styled from "styled-components";
import cookie from "react-cookies";

// Contents
import cookie_text from "../../../assets/contents/cookie_text";
import logo from "../../../assets/images/logo.png";
import pathname from "../../../assets/contents/pathname";

// Styles
import { Button, CenterColumnFlexDiv } from "../../../assets/styles/basic.style";

// Api
import { memberApi } from "../../../utils/api";
import { signout } from "../../../utils/lib";

const Logout = ({ user }) => {
   // 로그아웃
   async function logout() {
      if (!window.confirm("로그아웃하시겠습니까?")) return;
      try {
         const {
            data: { status },
         } = await memberApi.logout({
            accessToken: cookie.load(cookie_text.user_token),
         });
         if (status === 200) {
            signout(pathname.home);
         }
      } catch (err) {
         console.error(err.response);
         alert("에러가 발생했습니다. 다시 시도해주세요.");
      }
   }

   return (
      <LogoutBox>
         <h2>
            <img src={logo} alt="virspit logo" />
         </h2>
         <strong>{user.memberName}</strong>
         <p>{user.email}</p>
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
