import React, { useEffect, useState } from "react";

const MypageLogic = ({ history, is_login }) => {
   const [user, setUser] = useState({});

   useEffect(() => {
      if (!is_login) {
         alert("로그인 후 이용해주세요");
         return history.go(-1);
      }
      //test
      const testuser = {
         id: 1,
         name: "최유현",
         email: "test@test.com",
      };
      setUser(testuser);
   }, []);

   return { user };
};

export default MypageLogic;
