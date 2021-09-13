import React from "react";
import { Link } from "react-router-dom";

// Images & Icons
import { LoginForm, CheckBoxLabel } from "./Login.style";
import { Button, LeftColumnFlexDiv } from "../../assets/styles/basic.style";
import logoImage from "../../assets/images/logo.png";

// Logic
import LoginLogic from "./Login.logic";

const Login = ({ match, history }) => {
   const { email, inputRef, setInfo, login } = LoginLogic({ history });

   return (
      <LoginForm>
         <h2>
            <Link to="/">
               <img src={logoImage} alt="virspit logo" />
            </Link>
         </h2>
         <input
            type="email"
            ref={inputRef.email}
            defaultValue={email}
            placeholder="이메일을 입력하세요"
            onChange={({ target: { value } }) => setInfo({ key: "email", value })}
         />
         <input
            type="password"
            ref={inputRef.pw}
            placeholder="비밀번호를 입력하세요"
            onChange={({ target: { value } }) => setInfo({ key: "pw", value })}
         />
         <LeftColumnFlexDiv>
            <CheckBoxLabel>
               <input type="checkbox" onChange={({ target: { checked } }) => setInfo({ key: "check_save_email", value: checked })} />
               이메일 저장
            </CheckBoxLabel>
         </LeftColumnFlexDiv>
         <Button onClick={login}>LOGIN</Button>
         <p>
            계정이 없으신가요? <Link to="/signup">회원가입하기</Link>
         </p>
      </LoginForm>
   );
};

export default Login;
