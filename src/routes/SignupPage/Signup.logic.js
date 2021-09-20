import React, { useState } from "react";

// Contents
import pathname from "../../assets/contents/pathname";

const SignupLogic = ({ history }) => {
   const [inputState, setInputState] = useState({
      email: "",
      name: "",
      pw: "",
      rePw: "",
      phone: "",
      birthday: "",
      gender: "",
      virspit_term: false,
      transaction_term: false,
      privacy_term: false,
      marketing_term: false,
   });

   // Set InputState
   const setInfo = ({ key, value }) => {
      if (key === "phone") value = setPhoneForm(value);
      if (key === "birthday") value = setBirthdayForm(value);
      setInputState({ ...inputState, [key]: value });
   };

   // Null Check
   const signupNullCheck = () => {
      const { email, name, pw, rePw, phone, birthday, gender, virspit_term, transaction_term, privacy_term } = inputState;
      if (!email) return alert("이메일을 입력해주세요");
      if (!name) return alert("이메일을 입력해주세요");
      if (!checkPwForm(pw)) return alert("비밀번호는 영어, 숫자, 특수문자를 각각 1개 이상 포함하여 8자리 이상으로 작성해주세요");
      if (pw !== rePw) return alert("비밀번호가 일치하지 않습니다");
      if (!phone || phone.length < 12) return alert("연락처를 입력해주세요");
      if (!birthday || birthday.length < 10) return alert("생년월일을 입력해주세요");
      if (!gender) return alert("성별을 선택해주세요");
      if (!virspit_term) return alert("ViRSPiT 이용약관에 동의해주세요");
      if (!transaction_term) return alert("전자금융거래 이용약관에 동의해주세요");
      if (!privacy_term) return alert("개인정보 수집 및 이용에 동의해주세요");
      return true;
   };

   // Send Signup Info To Server
   const signup = () => {
      if (!signupNullCheck()) return;
      console.log(inputState);
      history.push(pathname.login);

      // axios 연결
      // try {
      //    // 로딩 시작
      // } catch (err) {
      //    console.error(err);
      // }
   };

   /* 정규식 관련 */

   // Check Right Password Form
   const checkPwForm = (str) => {
      const isRightPwForm = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
      return isRightPwForm.test(str);
   };

   // Change Right Phone Form
   const setPhoneForm = (str) => {
      return str.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
   };

   // Change Right Birthday Form
   const setBirthdayForm = (str) => {
      return str.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
   };

   return { inputState, setInfo, signup, checkPwForm, setPhoneForm };
};

export default SignupLogic;
