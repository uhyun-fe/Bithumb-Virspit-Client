import React, { useState } from "react";

// Contents
import pathname from "../../assets/contents/pathname";
import terms from "../../assets/contents/terms";
import { memberApi } from "../../utils/api";
import { checkPwForm, setPhoneForm, setBirthdayForm } from "../../utils/lib";

const SignupLogic = ({ history }) => {
   const [loading, setLoading] = useState(false);
   const [inputState, setInputState] = useState({
      email: "",
      email_code: null,
      is_right_email: false,
      name: "",
      pw: "",
      rePw: "",
      phone: "",
      birthday: "",
      gender: "",
      virspit_term: { is_apply: false, is_essential: true, contents: null, title: "ViRSPiT 이용약관 동의" },
      transaction_term: { is_apply: false, is_essential: true, contents: null, title: "전자금융거래 이용약관 동의" },
      privacy_term: { is_apply: false, is_essential: true, contents: null, title: "개인정보 수집 및 이용 동의" },
      marketing_term: { is_apply: false, is_essential: false, contents: null, title: "ViRSPiT 마케팅 정보 수신 동의" },
      selected_term: null,
   });

   // Set InputState
   const setInfo = ({ key, value }) => {
      if (key === "phone") value = setPhoneForm(value);
      if (key === "birthday") value = setBirthdayForm(value);
      setInputState({ ...inputState, [key]: value });
   };

   // Null Check
   const signupNullCheck = () => {
      const { email, is_right_email, name, pw, rePw, phone, birthday, gender, virspit_term, transaction_term, privacy_term } = inputState;
      if (!email) return alert("이메일을 입력해주세요");
      if (!is_right_email) return alert("이메일을 인증해주세요");
      if (!name) return alert("이름을 입력해주세요");
      if (!checkPwForm(pw)) return alert("비밀번호는 영어, 숫자, 특수문자를 각각 1개 이상 포함하여 8자리 이상으로 작성해주세요");
      if (pw !== rePw) return alert("비밀번호가 일치하지 않습니다");
      if (!phone || phone.length < 12) return alert("연락처를 입력해주세요");
      if (!birthday || birthday.length < 10) return alert("생년월일을 입력해주세요");
      if (!gender) return alert("성별을 선택해주세요");
      if (!virspit_term.is_apply) return alert("ViRSPiT 이용약관에 동의해주세요");
      if (!transaction_term.is_apply) return alert("전자금융거래 이용약관에 동의해주세요");
      if (!privacy_term.is_apply) return alert("개인정보 수집 및 이용에 동의해주세요");
      return true;
   };

   // Send Signup Info To Server
   const signup = async () => {
      if (!signupNullCheck()) return;

      const { email, name, pw, phone, birthday, gender } = inputState;
      try {
         setLoading(true);
         const {
            data: { status, data },
         } = await memberApi.signup({
            email,
            memberName: name,
            gender,
            password: pw,
            birthdayDate: birthday,
         });
         if (status === 200) {
            alert(data.memberName + "님, 회원가입이 완료되었습니다.\n로그인 후 서비스를 이용해주세요.");
            setLoading(false);
            history.push(pathname.login);
         }
      } catch (err) {
         console.error(err.response);
         alert("에러가 발생했습니다. 다시 시도해주세요.");
      } finally {
         setLoading(false);
      }
   };

   /* 이메일 인증 관련 */

   // Send Email For Certification
   const sendEmail = async () => {
      if (!inputState.email) return;
      alert("해당 이메일로 인증코드를 전송했습니다");
      setInputState({ ...inputState, email_code: "" });

      try {
         const {
            data: { status },
         } = await memberApi.sendCheckEmail({ useremail: inputState.email });
         if (status !== 200) {
            alert("에러가 발생했습니다. 다시 시도해주세요.");
         }
      } catch (err) {
         console.error(err.response);
      }
   };

   // Press Email Certification Code
   const isRightEmailCode = async () => {
      if (!inputState.email_code) return;
      try {
         setLoading(true);
         const {
            data: { status },
         } = await memberApi.confirmEmail({ useremail: inputState.email, number: inputState.email_code });
         if (status === 200) {
            setInputState({ ...inputState, is_right_email: true });
         } else {
            alert("에러가 발생했습니다. 다시 시도해주세요.");
         }
      } catch (err) {
         console.error(err.response);
         alert("인증코드가 올바르지 않습니다.");
      } finally {
         setLoading(false);
      }
   };

   /* 약관 설정 관련 */

   // '보기' 버튼클릭 시 모달창 띄우기
   const setTerms = async (key) => {
      if (!inputState[key].contents) {
         const data = await fetch(terms[key]);
         const result = await data.text();
         setInputState({ ...inputState, [key]: { ...inputState[key], contents: result }, selected_term: key });
      } else {
         setInputState({ ...inputState, selected_term: key });
      }
   };

   // 약관 상세조회 모달창 닫기
   const closeModal = (is_apply) => {
      const key = inputState.selected_term;
      setInputState({ ...inputState, selected_term: null, [key]: { ...inputState[key], is_apply: is_apply || inputState[key].is_apply } });
   };

   return { loading, inputState, setInfo, signup, checkPwForm, sendEmail, isRightEmailCode, setTerms, closeModal };
};

export default SignupLogic;
