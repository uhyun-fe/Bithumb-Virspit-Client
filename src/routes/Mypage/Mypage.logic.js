import React, { useEffect, useState } from "react";

// Contents
import cookie_text from "../../assets/contents/cookie_text";

const MypageLogic = ({ history, is_login }) => {
   const [user, setUser] = useState({ memberName: null, email: null });

   useEffect(() => {
      if (!is_login) {
         alert("로그인 후 이용해주세요");
         return history.go(-1);
      }
      // 로컬에 저장된 사용자정보
      setUser(JSON.parse(window.localStorage.getItem(cookie_text.user_info)));
   }, []);

   return { user };
};

export default MypageLogic;
