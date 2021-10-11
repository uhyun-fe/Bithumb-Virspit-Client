import cookie from "react-cookies";
import cookie_text from "../assets/contents/cookie_text";
import pathname from "../assets/contents/pathname";
import { memberApi } from "./api";

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

/* 날짜 관리 관련 */

// Date 객체를 이용해 원하는 날짜를 String으로 반환 (Date() => "2020-01-01") (num: 전으로 돌아갈 일수)
export function getStandardStringDate(date, num) {
   let prevYear = 0;
   let prevMonth = 0;
   let prevDate = num;
   let lastDate = 0;
   let now = { year: date.getFullYear(), month: date.getMonth() + 1, date: date.getDate() };

   if (now.date - prevDate < 1) {
      lastDate = new Date(now.year, now.month - 1, 0).getDate();
      prevMonth += 1;
   }
   prevDate = now.date - prevDate + (now.date - prevDate > 0 ? 0 : lastDate);
   if (now.month - prevMonth < 1) prevYear += 1;
   prevMonth = now.month - prevMonth + (now.month - prevMonth > 0 ? 0 : 12);
   prevYear = now.year - prevYear > 0 ? now.year - prevYear : now.year;

   return `${prevYear}-${prevMonth < 10 ? "0" : ""}${prevMonth}-${prevDate < 10 ? "0" : ""}${prevDate}`;
}

/* 유저 토큰 관련 */

// access token 만료 시
export const setNewToken = async ({ setLoading }) => {
   if (window.confirm("토큰이 만료되었습니다. 로그인을 연장하시겠습니까?")) {
      const accessToken = cookie.load(cookie_text.user_token);
      const refreshToken = cookie.load(cookie_text.user_refresh_token);
      try {
         setLoading(true);
         const {
            data: { status, data },
         } = await memberApi.refreshToken({
            accessToken,
            refreshToken,
         });
         if (status === 200) {
            cookie.save(cookie_text.user_token, data.accessToken, { path: "/" });
            window.location.reload();
         }
      } catch (err) {
         console.error(err.response);
         if (err.response) {
            if (err.response.data.status === 401) {
               alert("토큰이 만료되어 연장이 불가능합니다. 다시 로그인해주세요.");
               signout(pathname.login);
            }
         }
      } finally {
         setLoading(false);
      }
   } else {
      // 로그아웃
      signout(pathname.home);
   }
};

// 로그아웃
export const signout = (path) => {
   cookie.remove(cookie_text.user_token, { path: "/" });
   cookie.remove(cookie_text.user_refresh_token, { path: "/" });
   window.localStorage.removeItem(cookie_text.user_info);
   window.location.href = path;
};
