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
