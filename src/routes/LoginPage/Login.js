import React from "react";
import { Link } from "react-router-dom";

// Images & Icons
import { LoginForm } from "./Login.style";
import { Button } from "../../assets/styles/basic.style";
import logoImage from "../../assets/images/logo.png";

const Login = ({ match, history }) => {
   return (
      <LoginForm>
         <h2>
            <Link to="/">
               <img src={logoImage} alt="virspit logo" />
            </Link>
         </h2>
         <input type="email" placeholder="이메일을 입력하세요" onChange={({ target: { value: v } }) => console.log(v)} />
         <input type="password" placeholder="비밀번호를 입력하세요" onChange={({ target: { value: v } }) => console.log(v)} />
         <Button onClick={() => history.push("/")}>LOGIN</Button>
         <p>
            계정이 없으신가요? <Link to="/signup">회원가입하기</Link>
         </p>
      </LoginForm>
   );
};

export default Login;
