import React, { useEffect, useState } from "react";

// Contents
import { checkPwForm, setPhoneForm, setBirthdayForm } from "../../../utils/lib";

const MyinfoLogic = () => {
   const [state, setState] = useState({
      basic: {
         name: null,
         gender: null,
         email: null,
         phone: null,
         birthday: null,
      },
      pw: {
         current_pw: null,
         new_pw: null,
         new_pw_confirm: null,
      },
   });

   useEffect(() => {
      getUserInfo();
   }, []);

   // 회원정보 조회
   function getUserInfo() {
      const testinfo = {
         name: "최유현",
         gender: "woman",
         email: "test@test.com",
         phone: "01021210923",
         birthday: "1990-01-01",
      };

      setState({ ...state, basic: { ...testinfo, phone: setPhoneForm(testinfo.phone) } });
   }

   // 기본정보 수정
   function updateBasicInfo() {
      console.log(state.basic);
   }

   // Set Basic InputState
   const setBasicInfo = ({ key, value }) => {
      if (key === "phone") value = setPhoneForm(value);
      if (key === "birthday") value = setBirthdayForm(value);
      setState({ ...state, basic: { ...state.basic, [key]: value } });
   };

   // 비밀번호 수정
   function updatePasswordInfo() {
      console.log(state.pw);
   }

   return { state, setBasicInfo, updateBasicInfo, updatePasswordInfo };
};

export default MyinfoLogic;
