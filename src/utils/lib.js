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
