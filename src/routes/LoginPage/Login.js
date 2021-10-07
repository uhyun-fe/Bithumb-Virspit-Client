import React from "react";
import { Link } from "react-router-dom";

// Images & Icons
import { LoginForm, CheckBoxLabel, ModalContents } from "./Login.style";
import { Button, SpaceBetweenFlexDiv } from "../../assets/styles/basic.style";
import logoImage from "../../assets/images/logo.png";
// Logic
import LoginLogic from "./Login.logic";
// Contents
import pathname from "../../assets/contents/pathname";
// Components
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/Modal/Modal";

const Login = ({ match, history, is_login, setLogin }) => {
   const { loading, state, inputRef, setInfo, login, pwState, setPwModal, setResetEmail, resetPw } = LoginLogic({ history, is_login, setLogin });

   return (
      <>
         <LoginForm>
            <Loading is_loading={loading} />
            <h2>
               <Link to={pathname.home}>
                  <img src={logoImage} alt="virspit logo" />
               </Link>
            </h2>
            <input
               type="email"
               ref={inputRef.email}
               defaultValue={state.email}
               placeholder="이메일을 입력하세요"
               onChange={({ target: { value } }) => setInfo({ key: "email", value })}
            />
            <input
               type="password"
               ref={inputRef.pw}
               placeholder="비밀번호를 입력하세요"
               onChange={({ target: { value } }) => setInfo({ key: "pw", value })}
               onKeyPress={({ key }) => key === "Enter" && login()}
            />
            <SpaceBetweenFlexDiv className="another">
               <CheckBoxLabel>
                  <input
                     type="checkbox"
                     checked={state.check_save_email}
                     onChange={({ target: { checked } }) => setInfo({ key: "check_save_email", value: checked })}
                  />
                  이메일 저장
               </CheckBoxLabel>
               <span>
                  <Button onClick={() => setPwModal(true)}>비밀번호를 잊으셨나요?</Button>
               </span>
            </SpaceBetweenFlexDiv>
            <Button onClick={login}>LOGIN</Button>
            <p>
               <span>
                  계정이 없으신가요? <Link to={pathname.signup}>회원가입하기</Link>
               </span>
            </p>
         </LoginForm>
         {pwState.set_modal && (
            <Modal max_width={400} title={"비밀번호 초기화"} contents={pwModalContents(setResetEmail, resetPw)} closing={() => setPwModal(false)} />
         )}
      </>
   );
};

const pwModalContents = (setResetEmail, resetPw) => {
   return (
      <ModalContents>
         <p>
            회원가입된 계정의 경우, 아래에 입력한 이메일로 초기화된 비밀번호와 초기화 링크가 전송됩니다. 초기화 링크를 클릭하시고 해당 이메일과
            초기화된 비밀번호로 로그인한 후 반드시 비밀번호를 변경해주세요.
         </p>
         <input type="email" placeholder="회원가입한 계정의 이메일을 입력하세요" onChange={({ target: { value } }) => setResetEmail(value)} />
         <Button onClick={resetPw}>비밀번호 초기화</Button>
      </ModalContents>
   );
};

export default Login;
