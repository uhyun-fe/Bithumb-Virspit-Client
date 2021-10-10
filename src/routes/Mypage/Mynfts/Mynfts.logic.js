import React, { useEffect, useState } from "react";
// Api
import { orderApi } from "../../../utils/api";
// Contents
import { getStandardStringDate } from "../../../utils/lib";

const MynftsLogic = ({ user }) => {
   const [loading, setLoading] = useState(false);
   const [today] = useState(new Date());
   const [state, setState] = useState({
      today: getStandardStringDate(today, 0),
      page: 1,
      size: 10,
      total_count: 0,
      list: [],
      selected: null,
   });

   useEffect(() => {
      if (user.id) getMynftsList();
   }, [user]);

   // Get Searched List
   async function getMynftsList() {
      try {
         setLoading(true);
         const {
            data: { data: list },
         } = await orderApi.getUserOrderList({
            memberId: user.id,
            page: state.page,
            size: state.size,
            startDate: "2020-01-01",
            endDate: state.today,
         });
         console.log("주문 내역", list);
         setState({ ...state, list, total_count: list.length });
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   // Set Selected NFT
   function setSeletedNft(nft) {
      setState({ ...state, selected: nft });
   }

   return { loading, state, setSeletedNft };
};

export default MynftsLogic;
