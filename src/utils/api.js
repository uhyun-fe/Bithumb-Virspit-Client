import axios from "axios";
import cookie from "react-cookies";

// Cookie_Text
import cookie_text from "../assets/contents/cookie_text";

const LISTING_END_POINT = "http://3.35.78.136:8081/";
const ORDER_END_POINT = "http://3.35.71.218:8081/";
const USER_END_POINT = "http://3.38.44.130:8081/";
const PRODUCT_END_POINT = "http://15.165.34.36:8081/";
const AUTH_END_POINT = "http://3.38.44.130:8083/";

const SERVER_URI = "http://3.38.44.130:8070/";

const getAxios = (server_url) =>
   axios.create({
      baseURL: server_url,
      headers: {
         Accept: "*/*", // application/json
         "Content-Type": "*/*", // multipart/form-data
         "Access-Control-Allow-Origin": "*",
         // "X-Http-Token": cookie.load(cookie_text.user_token),
      },
   });

const listingAxios = getAxios(LISTING_END_POINT);
const orderAxios = getAxios(ORDER_END_POINT);
const userAxios = getAxios(USER_END_POINT);
const productAxios = getAxios(PRODUCT_END_POINT);
const authAxios = getAxios(AUTH_END_POINT);

const api = axios.create({
   baseURL: SERVER_URI,
   headers: {
      accept: "*/*", // application/json
      "Content-Type": "application/json", // multipart/form-data
      "Access-Control-Allow-Origin": "*",
      // "X-Http-Token": cookie.load(cookie_text.user_token),
   },
});

// 광고 advertisement-controller
export const advertisementApi = {
   getAdvertisementList: ({ page, size }) => listingAxios.get("advertisements", { params: { page, size } }), // 전체 광고리스트 조회
};

// 상품 product-controller
export const productApi = {
   getProductList: ({ page, size, sportsId }) => productAxios.get("product", { params: { page, size, sportsId } }), // 전체 상품리스트 조회
   getSearchedProductList: ({ word }) => listingAxios.get("products/list/search", { params: { word } }), // 상품이름 검색
   getProductDetail: ({ productId }) => productAxios.get(`product/${productId}`), // 상품 개별 조회
};

// 주문 order-controller
export const orderApi = {
   getUserOrderList: ({ memberId, offset, pageNumber, pageSize, paged, unpaged, sorted, unsorted, startDate, endDate }) =>
      orderAxios.get(`orders/members/${memberId}`, {
         params: { offset, pageNumber, pageSize, paged, unpaged, sorted, unsorted, startDate, endDate },
      }), // 사용자의 개별 주문목록 조회
   orderProduct: ({ memberId, productId }) => orderAxios.get("orders/req", { params: { memberId, productId } }), // 사용자 상품 주문
};

// 좋아요 favorite-controller
export const likeApi = {
   getLikesList: ({ id }) => userAxios.get(`favorite/${id}`), // 사용자의 개별 좋아요한 상품목록
   addLikes: ({ id, productId }) => userAxios.post(`favorite/${id}`, { params: { productId } }), // 상품 좋아요 등록
   deleteLikes: ({ id, productId }) => userAxios.delete(`favorite/${id}`, { params: { productId } }), // 상품 좋아요 취소
};

// 유저 member-controller
export const memberApi = {
   getMemberDetail: ({ id }) => userAxios.get(`member/${id}`), // 사용자정보 조회
   login: ({ email, password }) => api.post("auth/signin", { email, password }), // 로그인
   logout: ({ accessToken }) => api.post(`auth/signout?accessToken=${accessToken}`), // 로그아웃
   signup: ({ email, memberName, gender, password, birthdayDate, phoneNumber }) =>
      api.post("auth/register", { email, memberName, gender, password, birthdayDate, phoneNumber }), // 회원가입
   sendCheckEmail: ({ useremail }) => api.get("auth/verify/mail", { params: { useremail } }), // 회원가입 시 이메일 인증
   confirmEmail: ({ useremail, number }) => api.post(`auth/verify/mail?useremail=${useremail}&number=${number}`), // 회원가입 시 이메일 검증
   checkServer: () => authAxios.get("auth/check"), // 서버 체크
};

// 지갑정보 wallet-controller
export const walletApi = {
   getWalletInfo: ({ id }) => userAxios.get(`wallet/${id}`), // 사용자 개별 지갑정보 조회
};

// 종목 sports-controller
export const sportsApi = {
   getSportsList: ({ page, size }) => productAxios.get("sports", { params: { page, size } }), // 전체 종목리스트 조회
   addSport: (form) => productAxios.post("sports", form), // 종목추가 추후 삭제필요
   addTeamPlayer: ({ name, description, type, revenueShareRate, sportsId }) =>
      productAxios.post("team-player", { name, description, type, revenueShareRate, sportsId }),
   updateTeamPlayer: ({ teamPlayerId, name, description, type, revenueShareRate, sportsId }) =>
      productAxios.put(`team-player/${teamPlayerId}`, { name, description, type, revenueShareRate, sportsId }),
   addProduct: (form) => productAxios.post("product", form),
};
