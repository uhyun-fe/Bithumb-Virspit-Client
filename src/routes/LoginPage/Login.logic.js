import React, { useEffect, useRef, useState } from "react";
import cookie from "react-cookies";

// Contents
import cookie_text from "../../assets/contents/cookie_text";
import pathname from "../../assets/contents/pathname";

// Api
import { memberApi } from "../../utils/api";

const LoginLogic = ({ history, is_login, setLogin }) => {
   const [loading, setLoading] = useState(false);
   const [inputState, setInputState] = useState({ email: "", pw: "", check_save_email: false });
   const inputRef = {
      email: useRef(null),
      pw: useRef(null),
   };

   useEffect(() => {
      if (is_login) {
         alert("이미 로그인되었습니다.");
         return history.go(-1);
      }
      // Get Saved Email
      const saved_email = window.localStorage.getItem(cookie_text.user_email);
      if (saved_email) setInputState({ ...inputState, email: saved_email });
   }, []);

   // Set InputState
   const setInfo = ({ key, value }) => {
      setInputState({ ...inputState, [key]: value });
   };

   // Send Login Info To Server
   const login = async () => {
      if (!inputRef.email.current.value) {
         inputRef.email.current.focus();
         return alert("이메일을 입력해주세요");
      }
      if (!inputState.pw) {
         inputRef.pw.current.focus();
         return alert("비밀번호를 입력해주세요");
      }

      try {
         setLoading(true);
         const {
            data: { data },
         } = await memberApi.login({
            email: inputRef.email.current.value,
            password: inputState.pw,
         });
         if (!data) alert("이메일이나 비밀번호가 올바르지 않습니다.");
         else {
            // 로그인 성공 시 로컬스토리지에 이메일정보 저장
            if (inputState.check_save_email) window.localStorage.setItem(cookie_text.user_email, inputState.email);
            // 로그인 성공 시 쿠키에 토큰정보 저장
            cookie.save(cookie_text.user_token, data.accessToken, { path: "/" });
            cookie.save(cookie_text.user_refresh_token, data.refreshToken, { path: "/" });
            // 로그인 성공 시 로그인상태 변경
            setLogin(!!cookie.load(cookie_text.user_token));
            setLoading(false);
            history.push(pathname.home);
         }
      } catch (err) {
         console.error(err.response);
         alert("에러가 발생했습니다. 다시 시도해주세요.");
      }
   };

   return { loading, email: inputState.email, inputRef, setInfo, login };
};

export default LoginLogic;
