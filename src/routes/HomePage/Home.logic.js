import React, { useEffect, useState } from "react";
// Contents
import cookie_text from "../../assets/contents/cookie_text";
import { setNewToken } from "../../utils/lib";
// Api
import { advertisementApi, likeApi, productApi, sportsApi } from "../../utils/api";

const HomeLogic = ({ match, history, is_login }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({
      category_id: 0,
      is_team: false,
      page: 1,
      size: 6,
      total: 0,
      user: JSON.parse(localStorage.getItem(cookie_text.user_info)),
      liked_list: [],
      connect_like_api: false,
   });
   const [adver, setAdver] = useState([]);
   const [categories, setCategories] = useState([]);
   const [nftList, setNftList] = useState([]);

   useEffect(() => {
      getAdList();
      getAllSports();
      if (is_login) getLikesList();
   }, []);

   useEffect(() => {
      if (state.page) getProductList();
   }, [state.category_id, state.page, state.is_team]);

   useEffect(() => {
      if (state.connect_like_api && state.liked_list.length > 0) getProductList();
   }, [state.connect_like_api]);

   // 광고리스트 조회
   const getAdList = async () => {
      try {
         setLoading(true);
         const { data } = await advertisementApi.getAdvertisementList({ page: 1, size: 10 });
         setAdver(data);
      } catch (err) {
         console.error(err.response);
         if (err.response.status) alert(err.response.status + "에러가 발생했습니다. 다시 시도해주세요.");
      } finally {
         setLoading(false);
      }
   };

   // 전체 종목리스트 조회
   const getAllSports = async () => {
      try {
         setLoading(true);
         const {
            data: { data: list },
            data,
         } = await sportsApi.getSportsList();
         if (!list) {
            alert(data);
         } else {
            setCategories([{ id: 0, name: "All" }].concat(list));
         }
      } catch (err) {
         console.error(err.response);
         if (err.response.status) alert(err.response.status + "에러가 발생했습니다. 다시 시도해주세요.");
      } finally {
         setLoading(false);
      }
   };

   // 전체 상품리스트 조회
   const getProductList = async () => {
      try {
         setLoading(true);
         const {
            data: { content: list, totalElements: total },
         } = await productApi.getProductList({
            page: state.page,
            size: state.size,
            sportsId: state.category_id || undefined,
            teamPlayerType: state.is_team ? "TEAM" : "PLAYER",
         });
         if (state.liked_list.length > 0) {
            setNftList(list.map((item) => ({ ...item, is_liked: state.liked_list.indexOf(item.id) >= 0 })));
         } else {
            setNftList(list.map((item) => ({ ...item, is_liked: false })));
         }
         setState({ ...state, total });
      } catch (err) {
         console.error(err.response);
         if (err.response.status) alert(err.response.status + "에러가 발생했습니다. 다시 시도해주세요.");
      } finally {
         setLoading(false);
      }
   };

   // 좋아요한 상품목록 조회
   async function getLikesList() {
      try {
         setLoading(true);
         const {
            data: { data },
         } = await likeApi.getLikesList({ id: state.user ? state.user.id : 0 });
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
         if (!is_liked) {
            // 좋아요
            const {
               data: { status },
               data,
            } = await likeApi.addLikes({ id: state.user.id, productId: id });
            if (status === 200) {
               setState({ ...state, liked_list: state.liked_list.concat(id) });
               setNftList(nftList.map((nft) => (nft.id === id ? { ...nft, is_liked: !is_liked } : nft)));
            } else {
               setNewToken({ setLoading });
            }
         } else {
            // 좋아요 해제
            const {
               data: { status },
            } = await likeApi.deleteLikes({ id: state.user.id, productId: id });
            if (status === 200) {
               setState({ ...state, liked_list: state.liked_list.filter((item) => item !== id) });
               setNftList(nftList.map((nft) => (nft.id === id ? { ...nft, is_liked: !is_liked } : nft)));
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

   // set selected category
   const setSelectedCategoryId = (id) => {
      setState({ ...state, category_id: id });
   };

   // set selected is_team
   const setIsTeam = (bool) => {
      setState({ ...state, is_team: bool });
   };

   // set page
   const paging = ({ target: { value } }) => {
      setState({ ...state, page: value });
   };

   return { loading, state, adver, categories, nftList, setSelectedCategoryId, setIsTeam, pickItem, paging };
};

export default HomeLogic;
