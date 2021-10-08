import cookie from "react-cookies";
import cookie_text from "../assets/contents/cookie_text";
import pathname from "../assets/contents/pathname";

/* 정규식 관련 */

// Check Right Password Form
export const checkPwForm = (str) => {
   const isRightPwForm = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
   return isRightPwForm.test(str);
};

// Change Right Phone Form
export const setPhoneForm = (str) => {
   return str.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

// Change Right Birthday Form
export const setBirthdayForm = (str) => {
   return str.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
};

/* 유저 토큰 관련 */

// access token 만료 시
export const setNewToken = () => {
   if (window.confirm("토큰이 만료되었습니다. 로그인을 연장하시겠습니까?")) {
      // 수정필요
      console.log("토큰만료 시 로그인 연장 코드 작업중입니다.");
   } else {
      // 로그아웃
      // signout();
   }
};

// 로그아웃
export const signout = () => {
   cookie.remove(cookie_text.user_token, { path: "/" });
   cookie.remove(cookie_text.user_refresh_token, { path: "/" });
   window.localStorage.removeItem(cookie_text.user_info);
   window.location.href = pathname.home;
};
