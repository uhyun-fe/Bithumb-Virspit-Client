import React, { useEffect, useState } from "react";

// Api
import { productApi, sportsApi } from "../../utils/api";
import { walletApi } from "../../utils/klaytnApi";

const ProductLogic = ({ match, history, is_login }) => {
   const [loading, setLoading] = useState(false);
   const [product, setProduct] = useState({
      id: match.params.id,
      nftImageUrl: null,
      detailImageUrl: null,
      title: null,
      description: null,
      price: 0,
      startDateTime: "",
      remainedCount: 0,
      sportsInfo: { id: null, name: null },
      teamPlayerInfo: { id: null, name: null },
   });
   const [state, setState] = useState({ count: 1, pay_modal_on: false });

   useEffect(() => {
      getProductDetail();
   }, []);

   // 상품 상세정보 조회
   const getProductDetail = async () => {
      try {
         setLoading(true);
         const {
            data: { data },
         } = await productApi.getProductDetail({ productId: product.id });
         console.log("상품정보", data);
         setProduct(data);
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

   /* 결제 관련 */

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
