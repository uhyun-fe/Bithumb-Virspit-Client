import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Modal from "../../components/Modal/Modal";

// Logics
import SignupLogic from "./Signup.logic";

// Images & Icons
import { SignupForm, InputLabel, RadioLabel, CheckBoxLabel } from "./Signup.style";
import { Button, LeftColumnFlexDiv, LeftFlexDiv } from "../../assets/styles/basic.style";
import logoImage from "../../assets/images/logo.png";

// Docs
import termsOfUse from "../../assets/docs/이용약관.txt";

// Contents
import pathname from "../../assets/contents/pathname";

const Signup = ({ match, history }) => {
   // useEffect(() => {
   //    fetch(termsOfUse)
   //       .then((r) => r.text())
   //       .then((text) => {
   //          console.log("text decoded:", text);
   //       });
   // }, []);
   const { inputState, setInfo, signup, checkPwForm } = SignupLogic({ history });
   return (
      <>
         <SignupForm>
            <h2>
               <Link to={pathname.home}>
                  <img src={logoImage} alt="virspit logo" />
               </Link>
            </h2>
            {/* Email */}
            <InputBox
               type="email"
               type_text="이메일"
               placeholder="이메일을 입력하세요"
               value={inputState.email}
               onChange={({ target: { value } }) => setInfo({ key: "email", value })}
            />
            {/* Name */}
            <InputBox
               type_text="이름"
               placeholder="이름을 입력하세요"
               value={inputState.name}
               onChange={({ target: { value } }) => setInfo({ key: "name", value })}
            />
            {/* Password */}
            <InputBox
               type="password"
               type_text="비밀번호"
               placeholder="비밀번호를 입력하세요"
               value={inputState.pw}
               onChange={({ target: { value } }) => setInfo({ key: "pw", value })}
               guide={
                  !checkPwForm(inputState.pw) ? "비밀번호는 영어, 숫자, 특수문자를 각각 1개 이상 포함하여 8자리 이상으로 작성해주세요" : undefined
               }
            />
            {/* Password Confirm */}
            <InputBox
               type="password"
               type_text="비밀번호 확인"
               placeholder="비밀번호를 한 번 더 입력하세요"
               value={inputState.rePw}
               onChange={({ target: { value } }) => setInfo({ key: "rePw", value })}
               guide={inputState.pw !== inputState.rePw ? "비밀번호가 일치하지 않습니다" : undefined}
            />
            {/* Phone */}
            <InputBox
               type_text="연락처"
               placeholder="연락처를 입력하세요 (ex. 010-1234-1234)"
               value={inputState.phone}
               onChange={({ target: { value } }) => setInfo({ key: "phone", value })}
            />
            {/* Birthday */}
            <InputBox
               type_text="생년월일"
               placeholder="생년월일을 입력하세요 (ex. 2000-01-01)"
               value={inputState.birthday}
               onChange={({ target: { value } }) => setInfo({ key: "birthday", value })}
            />
            {/* Gender */}
            <GenderRadioBox onClick={({ target: { value } }) => setInfo({ key: "gender", value })} />
            {/* Terms */}
            <LeftColumnFlexDiv>
               <CheckTerms
                  title="[필수] ViRSPiT 이용약관 동의"
                  txt={"[sdf]"}
                  onClick={({ target: { checked } }) => setInfo({ key: "virspit_term", value: checked })}
               />
               <CheckTerms
                  title="[필수] 전자금융거래 이용약관 동의"
                  txt={"[sdf]"}
                  onClick={({ target: { checked } }) => setInfo({ key: "transaction_term", value: checked })}
               />
               <CheckTerms
                  title="[필수] 개인정보 수집 및 이용 동의"
                  txt={"[sdf]"}
                  onClick={({ target: { checked } }) => setInfo({ key: "privacy_term", value: checked })}
               />
               <CheckTerms
                  title="[선택] ViRSPiT 마케팅 정보 수신 동의"
                  onClick={({ target: { checked } }) => setInfo({ key: "marketing_term", value: checked })}
               />
            </LeftColumnFlexDiv>
            <Button onClick={signup}>SIGN UP</Button>
            <p>
               이미 계정이 있으신가요? <Link to={pathname.login}>로그인하기</Link>
            </p>
         </SignupForm>
         {/* {true && <Modal />} */}
      </>
   );
};

const InputBox = ({ type, type_text, value, placeholder, onChange, guide }) => {
   return (
      <InputLabel>
         {type_text}
         <input type={type || "text"} value={value} placeholder={placeholder} onChange={onChange} />
         {guide && <p>* {guide}</p>}
      </InputLabel>
   );
};

// 성별 선택 영역
const GenderRadioBox = ({ onClick }) => {
   return (
      <InputLabel>
         성별
         <LeftFlexDiv>
            <RadioLabel>
               <input type="radio" name="gender" value="woman" onClick={onClick} />
               여자
            </RadioLabel>
            <RadioLabel>
               <input type="radio" name="gender" value="man" onClick={onClick} />
               남자
            </RadioLabel>
            <RadioLabel>
               <input type="radio" name="gender" value="another" onClick={onClick} />
               기타
            </RadioLabel>
         </LeftFlexDiv>
      </InputLabel>
   );
};

const CheckTerms = ({ title, txt, onClick }) => {
   return (
      <CheckBoxLabel>
         <input type="checkbox" onChange={onClick} />
         {title}
         {txt && <Button>{`(보기)`}</Button>}
      </CheckBoxLabel>
   );
};

export default Signup;
