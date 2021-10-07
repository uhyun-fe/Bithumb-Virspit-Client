import React, { useEffect, useState } from "react";
import { memberApi } from "../../../utils/api";

// Contents
import { checkPwForm, setPhoneForm, setBirthdayForm } from "../../../utils/lib";
import cookie_text from "../../../assets/contents/cookie_text";

const MyinfoLogic = ({ history, user }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({
      basic: {
         name: null,
         gender: null,
         email: null,
         phone: null,
         birthday: null,
      },
      pw: {
         currentpw: "",
         newpw: "",
         renewpw: "",
      },
   });

   useEffect(() => {
      getUserInfo();
   }, [user]);

   // 회원정보 조회
   function getUserInfo() {
      const { memberName, email, phoneNumber, gender, birthdayDate } = user;
      setState({ ...state, basic: { name: memberName, gender, email, phone: phoneNumber, birthday: birthdayDate } });
   }

   // 기본정보 수정
   async function updateBasicInfo() {
      if (!window.confirm("수정하시겠습니까?")) return;
      const { name, phone, gender, birthday } = state.basic;
      try {
         setLoading(true);
         const data = await memberApi.updateBasicInfo({ id: 3, birthdayDate: birthday, gender, memberName: name, phoneNumber: phone });
         if (data.status === 200) {
            const new_info = { ...user, ...JSON.parse(data.config.data) };
            window.localStorage.setItem(cookie_text.user_info, JSON.stringify(new_info));
            setLoading(false);
            alert("수정되었습니다");
            history.go(0);
         } else {
            alert("에러가 발생했습니다. 다시 시도해주세요");
         }
      } catch (err) {
         console.error(err.response);
         alert("에러가 발생했습니다. 다시 시도해주세요");
      } finally {
         setLoading(false);
      }
   }

   // Set Basic InputState
   const setBasicInfo = ({ key, value }) => {
      if (key === "phone") value = setPhoneForm(value);
      if (key === "birthday") value = setBirthdayForm(value);
      setState({ ...state, basic: { ...state.basic, [key]: value } });
   };

   // 비밀번호 수정
   async function updatePasswordInfo() {
      const { currentpw, newpw, renewpw } = state.pw;
      if (!currentpw) return alert("현재 비밀번호를 입력해주세요");
      if (!checkPwForm(newpw)) return alert("비밀번호는 영어, 숫자, 특수문자를 각각 1개 이상 포함하여 8자리 이상으로 작성해주세요");
      if (newpw !== renewpw) return alert("신규 비밀번호가 일치하지 않습니다");
      if (!window.confirm("비밀번호를 변경하시겠습니까?")) return;

      try {
         setLoading(true);
         const data = await memberApi.updatePassword({ email: user.email, beforePwd: currentpw, afterPwd: newpw }); // 수정필요 (아이디값)
         console.log(data);
         // if (data.status === 200) {
         //    const new_info = { ...user, ...JSON.parse(data.config.data) };
         //    window.localStorage.setItem(cookie_text.user_info, JSON.stringify(new_info));
         //    setLoading(false);
         //    alert("수정되었습니다");
         //    history.go(0);
         // } else {
         //    alert("에러가 발생했습니다. 다시 시도해주세요");
         // }
      } catch (err) {
         console.error(err.response);
         alert("에러가 발생했습니다. 다시 시도해주세요");
      } finally {
         setLoading(false);
      }
   }

   // Set Pw InputState
   const setPwInfo = ({ key, value }) => {
      setState({ ...state, pw: { ...state.pw, [key]: value } });
   };

   return { state, setBasicInfo, updateBasicInfo, setPwInfo, updatePasswordInfo };
};

export default MyinfoLogic;
