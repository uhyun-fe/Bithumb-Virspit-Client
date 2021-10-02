import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";

// Api
import { productApi } from "../../utils/api";
import { walletApi } from "../../utils/klaytnApi";

const ProductLogic = ({ match, history, is_login }) => {
   const [loading, setLoading] = useState(false);
   const [product, setProduct] = useState({ id: match.params.id, price: 0, startDateTime: "" });
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
      // setProduct(test);
      getProductDetail();
   }, []);

   // 상품 상세정보 조회
   const getProductDetail = async () => {
      try {
         setLoading(true);
         const { data } = await productApi.getProductDetail({ productId: product.id });
         console.log("상품정보", data);
         setProduct(data);

         // // // test //
         // // const data = [
         // //    {
         // //       count: 0,
         // //       createdDate: "2021-10-01T06:25:29.083Z",
         // //       description: "string",
         // //       exhibition: false,
         // //       id: 1,
         // //       name: "테스트 NFT",
         // //       nftUri: testImage,
         // //       price: 100,
         // //       startDate: "2021-10-01T06:25:29.084Z",
         // //       type: "PLAYER",
         // //       updatedDate: "2021-10-01T06:25:29.084Z",
         // //    },
         // // ];
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   };

   // // 수량 변경
   // const setCountNumber = (v) => {
   //    if (!v) return;
   //    if (parseInt(v) < 1 || parseInt(v) > 999) return;
   //    setState({ ...state, count: parseInt(v) });
   // };

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

   return { loading, product, state, controlPayModal, pay };
};

export default ProductLogic;
