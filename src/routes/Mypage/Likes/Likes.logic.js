import React, { useEffect, useState } from "react";

// Api
import { likeApi, productApi } from "../../../utils/api";
// Contents
import { setNewToken } from "../../../utils/lib";

const LikesLogic = ({ user, history }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({ total: 0, id_list: [], list: [] });

   useEffect(() => {
      if (!user.id) return;
      getLikesList();
   }, [user]);

   useEffect(() => {
      if (state.id_list.length > 0) {
         getProductList();
      }
   }, [state.id_list]);

   // 좋아요한 상품 아이디목록 조회
   async function getLikesList() {
      try {
         setLoading(true);
         const {
            data: { data },
         } = await likeApi.getLikesList({ id: user.id });
         if (data === undefined) {
            setNewToken({ setLoading });
         } else {
            setState({ ...state, id_list: data.map((d) => d.productId), total: data.length });
         }
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   // 아이디리스트에 해당하는 상품리스트 조회
   async function getProductList() {
      const ids = state.id_list.map((i) => `ids=${i}`).join("&");
      try {
         setLoading(true);
         const { data: list } = await productApi.getLikeProductList({ ids: state.id_list.join(",") });
         setState({ ...state, list: list.map((item) => ({ ...item, is_liked: true })), total: list.length });
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   // 상품 좋아요/좋아요해제
   const pickItem = async ({ id, is_liked }) => {
      try {
         setLoading(true);
         if (!is_liked) {
            // 좋아요
            const {
               data: { status },
            } = await likeApi.addLikes({ id: user.id, productId: id });
            if (status === 200) {
               setState({ ...state, list: state.list.map((item) => (item.id === id ? { ...item, is_liked: true } : item)) });
            } else {
               setNewToken({ setLoading });
            }
         } else {
            // 좋아요 해제
            const {
               data: { status },
            } = await likeApi.deleteLikes({ id: user.id, productId: id });
            if (status === 200) {
               setState({ ...state, list: state.list.map((item) => (item.id === id ? { ...item, is_liked: false } : item)) });
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

   return { loading, state, pickItem };
};

export default LikesLogic;
