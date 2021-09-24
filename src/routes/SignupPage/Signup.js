import React from "react";
import { Link } from "react-router-dom";

// Components
import Modal from "../../components/Modal/Modal";

// Logics
import SignupLogic from "./Signup.logic";

// Images & Icons
import { SignupForm, InputLabel, RadioLabel, CheckBoxLabel, CheckModalContentBox } from "./Signup.style";
import { Button, LeftColumnFlexDiv, LeftFlexDiv } from "../../assets/styles/basic.style";
import logoImage from "../../assets/images/logo.png";

// Contents
import pathname from "../../assets/contents/pathname";

// 약관동의 순서
const TERM_ORDER = ["virspit_term", "transaction_term", "privacy_term", "marketing_term"];

const Signup = ({ match, history }) => {
   const { inputState, setInfo, signup, checkPwForm, sendEmail, isRightEmailCode, setTerms, closeModal } = SignupLogic({ history });
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
               certification={sendEmail}
               disabled={inputState.email_code !== null}
               onChange={({ target: { value } }) => setInfo({ key: "email", value })}
            />
            {inputState.email_code !== null && (
               <InputBox
                  type="email"
                  type_text="이메일 인증코드"
                  placeholder="이메일로 전송된 인증코드를 입력하세요"
                  value={inputState.email_code}
                  certification={isRightEmailCode}
                  disabled={inputState.is_right_email}
                  onChange={({ target: { value } }) => setInfo({ key: "email_code", value })}
                  guide={inputState.is_right_email ? "인증되었습니다" : "인증코드 입력 후 인증버튼을 클릭해주세요"}
                  guide_ok={inputState.is_right_email}
               />
            )}
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
               {TERM_ORDER.map((term, i) => (
                  <CheckTerms
                     key={i}
                     title={`[${inputState[term].is_essential ? "필수" : "선택"}] ${inputState[term].title}`}
                     is_apply={inputState[term].is_apply}
                     setModal={inputState[term].is_essential ? () => setTerms(term) : undefined}
                     onClick={({ target: { checked } }) => setInfo({ key: term, value: { ...inputState[term], is_apply: checked } })}
                  />
               ))}
            </LeftColumnFlexDiv>
            <Button onClick={signup}>SIGN UP</Button>
            <p>
               이미 계정이 있으신가요? <Link to={pathname.login}>로그인하기</Link>
            </p>
         </SignupForm>
         {inputState.selected_term && (
            <Modal
               max_width={350}
               title={inputState[inputState.selected_term].title}
               contents={CheckModalContents(inputState[inputState.selected_term].contents, () => closeModal(true))}
               closing={() => closeModal(false)}
            />
         )}
      </>
   );
};

const InputBox = ({ type, type_text, value, placeholder, onChange, guide, guide_ok, certification, disabled }) => {
   return (
      <InputLabel>
         {type_text}
         <input type={type || "text"} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled} />
         {guide && <p className={guide_ok ? "ok" : ""}>* {guide}</p>}
         {certification && !disabled && <Button onClick={() => certification()}>인증</Button>}
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

// 동의 체크 영역
const CheckTerms = ({ is_apply, title, setModal, onClick }) => {
   return (
      <CheckBoxLabel>
         <input type="checkbox" checked={is_apply} onChange={onClick} />
         {title}
         {setModal && <Button onClick={setModal}>{`(보기)`}</Button>}
      </CheckBoxLabel>
   );
};

// 동의 관련 모달 영역
const CheckModalContents = (contents, closeModal) => {
   return (
      <CheckModalContentBox>
         <p>
            {contents.split("\n").map((c, i) => (
               <span key={i}>
                  {c}
                  <br />
               </span>
            ))}
         </p>
         <Button className="ok" onClick={closeModal}>
            동의
         </Button>
      </CheckModalContentBox>
   );
};

export default Signup;
