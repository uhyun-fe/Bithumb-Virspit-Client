import React, { useEffect, useState } from "react";

// test
import testImage from "../../../assets/images/test.jpg";

const PaymentsLogic = () => {
   const [today] = useState(new Date());
   const [state, setState] = useState({
      search_date: {
         start: getStandardStringDate(today, 7),
         end: getStandardStringDate(today, 0),
         max: getStandardStringDate(today, 0),
      },
      total_count: 3,
      list: [],
   });

   useEffect(() => {
      getPaymentsList();
   }, []);

   // 결제내역 조회
   function getPaymentsList() {
      // test
      const testPaymentsList = [
         {
            id: 1,
            created_at: "2021-01-01",
            updated_at: "2021-01-01",
            user: { id: 1, name: "최유현", email: "test@test.com", phone: "01023234545" },
            product: { id: 1, title: "김연경 도쿄올림픽 특별한정 NFT", sports: "배구", player: "김연경", price: 10, imageUrl: testImage },
         },
         {
            id: 1,
            created_at: "2021-01-01",
            updated_at: "2021-01-01",
            user: { id: 1, name: "최유현", email: "test@test.com", phone: "01023234545" },
            product: { id: 1, title: "김연경 도쿄올림픽 특별한정 NFT", sports: "배구", player: "김연경", price: 10, imageUrl: testImage },
         },
         {
            id: 1,
            created_at: "2021-01-01",
            updated_at: "2021-01-01",
            user: { id: 1, name: "최유현", email: "test@test.com", phone: "01023234545" },
            product: { id: 1, title: "김연경 도쿄올림픽 특별한정 NFT", sports: "배구", player: "김연경", price: 10, imageUrl: testImage },
         },
      ];
      setState({ ...state, list: testPaymentsList });
   }

   // 검색일자 변경
   function setSearchDate({ column, date }) {
      setState({ ...state, search_date: { ...state.search_date, [column]: date } });
   }

   // Date 객체를 이용해 원하는 날짜를 String으로 반환 (Date() => "2020-01-01") (num: 전으로 돌아갈 일수)
   function getStandardStringDate(date, num) {
      let prevYear = 0;
      let prevMonth = 0;
      let prevDate = num;
      let lastDate = 0;
      let now = { year: date.getFullYear(), month: date.getMonth() + 1, date: date.getDate() };

      if (now.date - prevDate < 1) {
         lastDate = new Date(now.year, now.month - 1, 0).getDate();
         prevMonth += 1;
      }
      prevDate = now.date - prevDate + (now.date - prevDate > 0 ? 0 : lastDate);
      if (now.month - prevMonth < 1) prevYear += 1;
      prevMonth = now.month - prevMonth + (now.month - prevMonth > 0 ? 0 : 12);
      prevYear = now.year - prevYear > 0 ? now.year - prevYear : now.year;

      return `${prevYear}-${prevMonth < 10 ? "0" : ""}${prevMonth}-${prevDate < 10 ? "0" : ""}${prevDate}`;
   }

   return { state, setSearchDate, getPaymentsList };
};

export default PaymentsLogic;
