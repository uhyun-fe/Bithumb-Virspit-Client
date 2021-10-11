import React, { useEffect, useState } from "react";
// Contents
import cookie_text from "../../assets/contents/cookie_text";
import { setNewToken } from "../../utils/lib";
// Api
import { likeApi, productApi } from "../../utils/api";

const SearchLogic = ({ match, history, is_login }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({
      is_nft: true,
      total: 0,
      list: [],
      page: 1,
      size: 4,
      liked_list: [],
      connect_like_api: false,
      user: JSON.parse(localStorage.getItem(cookie_text.user_info)),
   });

   useEffect(() => {
      if (is_login) getLikesList();
   }, [state.user]);

   useEffect(() => {
      if (state.connect_like_api && state.liked_list.length > 0) getSearchedList();
   }, [state.connect_like_api]);

   useEffect(() => {
      getSearchedList();
   }, [state.page, match.params.keyword]);

   // Set Search Result Category
   const setResultCategory = ({ is_nft }) => {
      setState({ ...state, is_nft });
   };

   // 검색된 상품 조회
   async function getSearchedList() {
      try {
         setLoading(true);
         const { data: list } = await productApi.searchProductList({ word: match.params.keyword });
         setState({
            ...state,
            list: list.map((item) => ({ ...item, is_liked: state.liked_list.length > 0 ? state.liked_list.indexOf(item.id) >= 0 : false })),
            total: list.length,
         });
         console.log("상품리스트", list);
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   // 좋아요한 상품목록 조회
   async function getLikesList() {
      try {
         setLoading(true);
         const {
            data: { data },
         } = await likeApi.getLikesList({ id: state.user.id });
         if (data === undefined) {
            setNewToken({ setLoading });
         } else {
            setState({
               ...state,
               liked_list: data.map((item) => item.productId).filter((item, i, o) => o.indexOf(item) === i),
               connect_like_api: true,
            });
         }
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   // 상품 좋아요/좋아요해제
   const pickItem = async ({ id, is_liked }) => {
      if (!is_login) return alert("관심상품 등록은 로그인 후 사용할 수 있습니다.");
      try {
         setLoading(true);
         let success = 0;
         if (!is_liked) {
            // 좋아요
            const {
               data: { status },
               data,
            } = await likeApi.addLikes({ id: state.user.id, productId: id });
            if (status === 200) {
               setState({
                  ...state,
                  liked_list: state.liked_list.concat(id),
                  list: state.list.map((nft) => (nft.id === id ? { ...nft, is_liked: !is_liked } : nft)),
               });
            } else {
               setNewToken({ setLoading });
            }
         } else {
            // 좋아요 해제
            const {
               data: { status },
            } = await likeApi.deleteLikes({ id: state.user.id, productId: id });
            if (status === 200) {
               setState({
                  ...state,
                  liked_list: state.liked_list.filter((item) => item !== id),
                  list: state.list.map((nft) => (nft.id === id ? { ...nft, is_liked: !is_liked } : nft)),
               });
            } else {
               setNewToken({ setLoading });
            }
         }
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   };

   // set page
   const paging = ({ target: { value } }) => {
      setState({ ...state, page: value });
   };

   return { loading, state, setResultCategory, pickItem, paging };
};

export default SearchLogic;
