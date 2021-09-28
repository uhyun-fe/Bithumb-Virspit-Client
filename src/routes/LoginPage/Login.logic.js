import React, { useEffect, useRef, useState } from "react";
import cookie from "react-cookies";

// Contents
import cookie_text from "../../assets/contents/cookie_text";
import pathname from "../../assets/contents/pathname";

const LoginLogic = ({ history, is_login, setLogin }) => {
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

      // 로그인 성공 시 로컬스토리지에 이메일정보 저장
      if (inputState.check_save_email) window.localStorage.setItem(cookie_text.user_email, inputState.email);

      // 로그인 성공 시 쿠키에 토큰정보 저장
      cookie.save(cookie_text.user_token, "testtoken", { path: "/" });

      // 로그인 성공 시 로그인상태 변경
      setLogin(!!cookie.load(cookie_text.user_token));

      history.push(pathname.home);

      // axios 연결
      // try {
      //    // 로딩 시작
      // } catch (err) {
      //    console.error(err);
      // }
   };

   return { email: inputState.email, inputRef, setInfo, login };
};

export default LoginLogic;
