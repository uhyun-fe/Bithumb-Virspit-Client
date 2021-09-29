import React, { useEffect, useState } from "react";

// test
import testImage from "../../../assets/images/test.jpg";

const PaymentsLogic = () => {
   const [state, setState] = useState({ search_date: { start: null, end: null }, total_count: 3, list: [] });

   useEffect(() => {
      getPaymentsList();
   }, []);

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

   return { state };
};

export default PaymentsLogic;
