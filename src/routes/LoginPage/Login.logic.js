import React, { useEffect, useRef, useState } from "react";
import cookie_text from "../../assets/contents/cookie_text";

const LoginLogic = ({ history }) => {
   const [inputState, setInputState] = useState({ email: "", pw: "", check_save_email: false });
   const inputRef = {
      email: useRef(null),
      pw: useRef(null),
   };

   useEffect(() => {
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

      if (inputState.check_save_email) window.localStorage.setItem(cookie_text.user_email, inputState.email);
      history.push("/");

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
