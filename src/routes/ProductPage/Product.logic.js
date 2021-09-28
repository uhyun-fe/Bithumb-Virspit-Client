import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";
import { walletApi } from "../../utils/klaytnApi";

const ProductLogic = ({ history, is_login }) => {
   const [product, setProduct] = useState({ price: 0 });
   const [state, setState] = useState({ count: 1, pay_modal_on: false });

   useEffect(() => {
      const test = {
         id: 1,
         title: "테스트 NFT",
         sports: "축구",
         player: "박지성",
         price: 15,
         thumbnailUrl: testImage,
         detailUrl: testImage,
         description:
            "이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.",
      };
      setProduct(test);
   }, []);

   // 수량 변경
   const setCountNumber = (v) => {
      if (!v) return;
      if (parseInt(v) < 1 || parseInt(v) > 999) return;
      setState({ ...state, count: parseInt(v) });
   };

   // 결제모달 띄우기
   const controlPayModal = (bool) => {
      setState({ ...state, pay_modal_on: bool });
   };

   // 결제하기
   const pay = () => {
      alert("결제 구현중입니다.");
      setState({ ...state, pay_modal_on: false });
   };

   // test 지갑정보 조회
   const testWallet = async () => {
      try {
         const data = await walletApi.getBalanceOfAccount(process.env.REACT_APP_TEST_AUTHORIZATION, process.env.REACT_APP_TEST_ADDRESS);
         console.log(data);
         console.log(data.data.result, parseFloat(data.data.result / 10 ** 18));
      } catch (e) {
         console.log(e.response);
      }
   };

   return { product, state, setCountNumber, controlPayModal, pay };
};

export default ProductLogic;
