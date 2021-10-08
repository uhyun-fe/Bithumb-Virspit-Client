import axios from "axios";
import cookie from "react-cookies";
// Cookie_Text
import cookie_text from "../assets/contents/cookie_text";

/* SERVER URI */
const GATEWAY_SERVER_URI = "http://172.17.0.3:8070";
const AUTH_SERVER_URI = "http://3.37.16.78:8070";
const PRODUCT_SERVER_URI = "http://15.165.34.36:8081";
const USER_SERVER_URI = "http://3.38.42.161:8081";

const LISTING_SERVER_URI = "http://3.35.78.136:8081";

/* AXIOS Instance */
const getAxios = (server_url) =>
   axios.create({
      baseURL: server_url,
      headers: {
         Accept: "application/json", // application/json
         "Content-Type": "application/json", // multipart/form-data
         "Access-Control-Allow-Origin": "*",
         Authorization: "Bearer " + cookie.load(cookie_text.user_token),
      },
   });

const authInstance = getAxios(AUTH_SERVER_URI);
const productInstance = getAxios(PRODUCT_SERVER_URI);

const listingInstance = getAxios(LISTING_SERVER_URI);

/* Api List */

const setQuery = (params) => {
   return Object.keys(params)
      .filter((key) => params[key] !== undefined)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
      .join("&");
};

// 광고
export const advertisementApi = {
   getAdvertisementList: ({ page, size }) => listingInstance.get("/advertisements?" + setQuery({ page, size })), // 전체 광고리스트 조회
};

// 종목 sports-controller
export const sportsApi = {
   getSportsList: ({ page, size }) => productInstance.get("/sports?" + setQuery({ page, size })), // 전체 종목리스트 조회
};

// 상품
export const productApi = {
   getProductList: ({ page, size, sportsId, isTeam, title }) => productInstance.get(`/products?` + setQuery({ page, size, sportsId, isTeam, title })), // 전체 상품리스트 조회
   getProductDetail: ({ productId }) => productInstance.get(`/products/${productId}`), // 상품 개별 조회
};

// 좋아요
export const likeApi = {
   getLikesList: ({ id }) => authInstance.get(`/favorite/${id}`), // 사용자의 개별 좋아요한 상품목록
   addLikes: ({ id, productId }) => authInstance.post(`/favorite/${id}?productId=${productId}`), // 상품 좋아요 등록
   deleteLikes: ({ id, productId }) => authInstance.delete(`/favorite/${id}?productId=${productId}`), // 상품 좋아요 취소
};

// 유저
export const memberApi = {
   login: ({ email, password }) => authInstance.post("/auth/signin", { email, password }), // 로그인
   logout: ({ accessToken }) => authInstance.post(`/auth/signout?accessToken=${accessToken}`), // 로그아웃
   signup: ({ email, memberName, gender, password, birthdayDate, phoneNumber }) =>
      authInstance.post("/auth/register", { email, memberName, gender, password, birthdayDate, phoneNumber }), // 회원가입
   sendCheckEmail: ({ useremail }) => authInstance.get("/auth/verify/mail", { params: { useremail } }), // 회원가입 시 이메일 인증
   confirmEmail: ({ useremail, number }) => authInstance.post(`/auth/verify/mail?useremail=${useremail}&number=${number}`), // 회원가입 시 이메일 검증
   updateBasicInfo: ({ id, birthdayDate, gender, memberName, phoneNumber }) =>
      authInstance.put(`/member/info/${id}`, { birthdayDate, gender, memberName, phoneNumber }), // 회원 기본정보 수정
   requestResetPw: ({ useremail }) => authInstance.post(`/auth/initpwd?useremail=${useremail}`), // 비밀번호 초기화 요청
   updatePassword: ({ email, beforePwd, afterPwd }) => authInstance.put("/auth/changepwd", { email, beforePwd, afterPwd }), // 회원 비밀번호 수정
};

// 주문
export const orderApi = {
   getUserOrderList: ({ memberId, page, size, startDate, endDate }) =>
      authInstance.get(`/orders/members/${memberId}?` + setQuery({ page, size, startDate, endDate })), // 사용자의 개별 주문목록 조회
   // orderProduct: ({ memberId, productId }) => orderAxios.get("orders/req", { params: { memberId, productId } }), // 사용자 상품 주문
};

// 지갑정보
export const walletApi = {
   getWalletInfo: ({ id }) => authInstance.get(`wallet/${id}`), // 사용자 개별 지갑정보 조회
};
