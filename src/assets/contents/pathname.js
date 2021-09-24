export default {
   home: "/",
   login: "/login",
   signup: "/signup",
   detail: (id) => `/nft/${id}`,
   search: (keyword) => `/search/${keyword}`,
   mypage: (type) => `/mypage/${type}`,
};

export const types = {
   mynfts: "mynft",
   payments: "payments",
   likes: "likes",
   myinfo: "myinfo",
   logout: "logout",
};

export const types_titles = {
   mynfts: "MY NFT",
   payments: "결제내역",
   likes: "관심상품",
   myinfo: "회원정보",
   logout: "로그아웃",
};
