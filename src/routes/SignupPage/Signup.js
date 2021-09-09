import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Images & Icons
import { SignupForm, InputLabel, RadioLabel, CheckBoxLabel } from "./Signup.style";
import { Button, LeftColumnFlexDiv, LeftFlexDiv } from "../../assets/styles/basic.style";
import logoImage from "../../assets/images/logo.png";

// Docs
import termsOfUse from "../../assets/docs/이용약관.txt";

const Signup = ({ match, history }) => {
   // useEffect(() => {
   //    fetch(termsOfUse)
   //       .then((r) => r.text())
   //       .then((text) => {
   //          console.log("text decoded:", text);
   //       });
   // }, []);
   return (
      <SignupForm>
         <h2>
            <Link to="/">
               <img src={logoImage} alt="virspit logo" />
            </Link>
         </h2>
         <InputBox type="email" type_text="이메일" placeholder="이메일을 입력하세요" onChange={({ target: { value } }) => console.log(value)} />
         <InputBox type_text="이름" placeholder="이름을 입력하세요" onChange={({ target: { value } }) => console.log(value)} />
         <InputBox
            type="password"
            type_text="비밀번호"
            placeholder="비밀번호를 입력하세요"
            onChange={({ target: { value } }) => console.log(value)}
            guide={true ? "비밀번호는 영어+특수문자1개를 포함하여 8자리 이상으로 작성해주세요" : undefined}
         />
         <InputBox
            type="password"
            type_text="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력하세요"
            onChange={({ target: { value } }) => console.log(value)}
            guide={true ? "비밀번호가 일치하지 않습니다" : undefined}
         />
         <InputBox type_text="연락처" placeholder="연락처를 입력하세요 (ex. 01012341234)" onChange={({ target: { value } }) => console.log(value)} />
         <InputBox type_text="생년월일" placeholder="생년월일을 입력하세요 (ex. 20001231)" onChange={({ target: { value } }) => console.log(value)} />
         <GenderRadioBox />
         <LeftColumnFlexDiv>
            <CheckTerms title="[필수] ViRSPiT 이용약관 동의" txt={"[sdf]"} />
            <CheckTerms title="[필수] 전자금융거래 이용약관 동의" txt={"[sdf]"} />
            <CheckTerms title="[필수] 개인정보 수집 및 이용 동의" txt={"[sdf]"} />
            <CheckTerms title="[선택] ViRSPiT 마케팅 정보 수신 동의" />
         </LeftColumnFlexDiv>
         <Button onClick={() => history.push("/")}>SIGN UP</Button>
         <p>
            이미 계정이 있으신가요? <Link to="/login">로그인하기</Link>
         </p>
      </SignupForm>
   );
};

const InputBox = ({ type, type_text, placeholder, onChange, guide }) => {
   return (
      <InputLabel>
         {type_text}
         <input type={type || "text"} placeholder={placeholder} onChange={(e) => onChange(e)} />
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
               <input type="radio" name="gender" value="woman" onClick={(e) => onClick(e)} />
               여자
            </RadioLabel>
            <RadioLabel>
               <input type="radio" name="gender" value="man" onClick={(e) => onClick(e)} />
               남자
            </RadioLabel>
            <RadioLabel>
               <input type="radio" name="gender" value="another" onClick={(e) => onClick(e)} />
               기타
            </RadioLabel>
         </LeftFlexDiv>
      </InputLabel>
   );
};

const CheckTerms = ({ title, txt }) => {
   return (
      <CheckBoxLabel>
         <input type="checkbox" />
         {title}
         {txt && <Button>{`(보기)`}</Button>}
      </CheckBoxLabel>
   );
};

export default Signup;
