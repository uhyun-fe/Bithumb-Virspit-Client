import axios from "axios";
import cookie from "react-cookies";

// Cookie_Text
import cookie_text from "../assets/contents/cookie_text";

const LISTING_END_POINT = "http://3.35.78.136:8081/";
const ORDER_END_POINT = "http://3.35.71.218:8081/";
const USER_END_POINT = "http://3.38.44.130:8081/";
const PRODUCT_END_POINT = "http://15.165.34.36:8081/";

const getAxios = (server_url) =>
   axios.create({
      baseURL: server_url,
      headers: {
         accept: "*/*", // application/json
         "Content-Type": "multipart/form-data", // multipart/form-data
         "Access-Control-Allow-Origin": "*",
         // "X-Http-Token": cookie.load(cookie_text.user_token),
      },
   });

const listingAxios = getAxios(LISTING_END_POINT);
const orderAxios = getAxios(ORDER_END_POINT);
const userAxios = getAxios(USER_END_POINT);
const productAxios = getAxios(PRODUCT_END_POINT);

// 광고 advertisement-controller
export const advertisementApi = {
   getAdvertisementList: ({ page, size }) => listingAxios.get("advertisements", { params: { page, size } }), // 전체 광고리스트 조회
};

// 상품 product-controller
export const productApi = {
   getProductList: ({ page, size }) => productAxios.get("product", { params: { page, size } }), // 전체 상품리스트 조회
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
export const memberApi = {};

// 지갑정보 wallet-controller
export const walletApi = {
   getWalletInfo: ({ id }) => userAxios.get(`wallet/${id}`), // 사용자 개별 지갑정보 조회
};

// 종목 sports-controller
export const sportsApi = {
   getSportsList: ({ page, size }) => productAxios.get("sports", { params: { page, size } }), // 전체 종목리스트 조회
   addSport: (form) => productAxios.post("sports", form), // 종목추가 추후 삭제필요
};
