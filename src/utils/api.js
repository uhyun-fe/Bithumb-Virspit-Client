import axios from "axios";
import cookie from "react-cookies";
// Cookie_Text
import cookie_text from "../assets/contents/cookie_text";

/* SERVER URI */
const SERVER_URI = "http://3.37.16.78:8070";

/* AXIOS Instance */
const axiosInstance = axios.create({
   baseURL: SERVER_URI,
   headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + cookie.load(cookie_text.user_token),
   },
});

const setQuery = (params) => {
   return Object.keys(params)
      .filter((key) => params[key] !== undefined)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
      .join("&");
};

/* Api List */

// 광고
export const advertisementApi = {
   getAdvertisementList: ({ page, size }) => axiosInstance.get("/advertisements?" + setQuery({ page, size })), // 전체 광고리스트 조회
};

// 종목
export const sportsApi = {
   getSportsList: () => axiosInstance.get("/sports"), // 전체 종목리스트 조회
};

// 상품
export const productApi = {
   getProductList: ({ page, size, sportsId, teamPlayerType }) =>
      axiosInstance.get(`/products/list?` + setQuery({ page, size, sportsId, teamPlayerType })), // 전체 상품리스트 조회
   searchProductList: ({ word }) => axiosInstance.get("/products/list/search?" + setQuery({ word })), // 상품 이름 검색
   getProductDetail: ({ productId }) => axiosInstance.get(`/products/${productId}`), // 상품 개별 조회
   getLikeProductList: ({ ids }) => axiosInstance.get(`/products/list/favorite?` + setQuery({ ids })), // 상품아이디에 대한 상품리스트 조회
};

// 좋아요
export const likeApi = {
   getLikesList: ({ id }) => axiosInstance.get(`/favorite/${id}`), // 사용자의 개별 좋아요한 상품목록
   addLikes: ({ id, productId }) => axiosInstance.post(`/favorite/${id}?productId=${productId}`), // 상품 좋아요 등록
   deleteLikes: ({ id, productId }) => axiosInstance.delete(`/favorite/${id}?productId=${productId}`), // 상품 좋아요 취소
};

// 유저
export const memberApi = {
   login: ({ email, password }) => axiosInstance.post("/auth/signin", { email, password }), // 로그인
   logout: ({ accessToken }) => axiosInstance.post(`/auth/signout?accessToken=${accessToken}`), // 로그아웃
   signup: ({ email, memberName, gender, password, birthdayDate, phoneNumber }) =>
      axiosInstance.post("/auth/register", { email, memberName, gender, password, birthdayDate, phoneNumber }), // 회원가입
   sendCheckEmail: ({ useremail }) => axiosInstance.get("/auth/verify/mail", { params: { useremail } }), // 회원가입 시 이메일 인증
   confirmEmail: ({ useremail, number }) => axiosInstance.post(`/auth/verify/mail?useremail=${useremail}&number=${number}`), // 회원가입 시 이메일 검증
   updateBasicInfo: ({ id, birthdayDate, gender, memberName, phoneNumber }) =>
      axiosInstance.put(`/member/info/${id}`, { birthdayDate, gender, memberName, phoneNumber }), // 회원 기본정보 수정
   requestResetPw: ({ useremail }) => axiosInstance.post(`/auth/initpwd?useremail=${useremail}`), // 비밀번호 초기화 요청
   updatePassword: ({ email, beforePwd, afterPwd }) => axiosInstance.put("/auth/changepwd", { email, beforePwd, afterPwd }), // 회원 비밀번호 수정
   refreshToken: ({ accessToken, refreshToken }) => axiosInstance.post(`/auth/refresh`, { accessToken, refreshToken }), // refreshToken으로 accessToken 재발급
};

// 주문
export const orderApi = {
   getUserOrderList: ({ memberId, page, size, startDate, endDate }) =>
      axiosInstance.get(`/orders/members/${memberId}?` + setQuery({ page, size, startDate, endDate })), // 사용자의 개별 주문목록 조회
   orderProduct: ({ memberId, productId }) => axiosInstance.post(`/orders?` + setQuery({ memberId, productId })), // 사용자 상품 주문
};

// 지갑정보
export const walletApi = {
   getWalletInfo: ({ id }) => axiosInstance.get(`wallet/${id}`), // 사용자 개별 지갑정보 조회
};
