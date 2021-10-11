import React, { useEffect, useState } from "react";

// test
import testImage from "../../../assets/images/test.jpg";
import { orderApi } from "../../../utils/api";
import { getStandardStringDate, setNewToken } from "../../../utils/lib";

const PaymentsLogic = ({ user, history }) => {
   const [loading, setLoading] = useState(false);
   const [today] = useState(new Date());
   const [state, setState] = useState({
      search_date: {
         start: getStandardStringDate(today, 7),
         end: getStandardStringDate(today, 0),
         max: getStandardStringDate(today, 0),
      },
      page: 1,
      size: 100,
      total_count: 0,
      list: [],
      selected: null,
   });

   useEffect(() => {
      if (!user.id) return;
      getPaymentsList();
   }, [user]);

   // 결제내역 조회
   async function getPaymentsList() {
      try {
         setLoading(true);
         const {
            data: { data: list },
         } = await orderApi.getUserOrderList({
            memberId: user.id,
            page: state.page,
            size: state.size,
            startDate: state.search_date.start,
            endDate: state.search_date.end,
         });
         if (!list) setNewToken({ setLoading });
         else setState({ ...state, list, total_count: list.length });
         console.log("주문 내역", list);
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   // 검색일자 변경
   function setSearchDate({ column, date }) {
      setState({ ...state, search_date: { ...state.search_date, [column]: date } });
   }

   // 결제내역 선택
   function selectePayment(item) {
      setState({ ...state, selected: item });
   }

   return { loading, state, setSearchDate, getPaymentsList, selectePayment };
};

export default PaymentsLogic;
