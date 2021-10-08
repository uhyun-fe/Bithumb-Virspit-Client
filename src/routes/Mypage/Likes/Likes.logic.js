import React, { useEffect, useState } from "react";

// Api
import { likeApi } from "../../../utils/api";
// Contents
import { setNewToken } from "../../../utils/lib";

const LikesLogic = ({ user, history }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({ total: 0, id_list: [], list: [] });

   useEffect(() => {
      if (!user.id) return;
      getLikesList();
   }, [user]);

   // 좋아요한 상품목록 조회
   async function getLikesList() {
      try {
         setLoading(true);
         const {
            data: { data },
         } = await likeApi.getLikesList({ id: user.id });
         if (data === undefined) {
            setNewToken();
         } else {
            console.log("좋아요 내역", data);
            setState({ ...state, id_list: data.map((d) => d.productId), total: data.length });
         }
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   return { loading, state };
};

export default LikesLogic;
