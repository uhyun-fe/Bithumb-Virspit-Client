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

   // test 팀플레이어 추가
   const setIconFile = async (e) => {
      // const file = e.target.files[0];
      // const form = new FormData();
      // form.append("description", "상품설명 test");
      // form.append("detailImageFile", file);
      // form.append("exhibition", true);
      // form.append("nftImageFile", file);
      // form.append("price", 180);
      // form.append("remainedCount", 50); // 최대 100개
      // form.append("startDateTime", "2021-10-10 18:30:00");
      // form.append("teamPlayerId", 2);
      // form.append("title", "손흥민의 테스트 NFT");

      // for (let a of form.entries()) {
      //    console.log(a[0], a[1]);
      // }

      try {
         setLoading(true);
         const data = await sportsApi.updateTeamPlayer({
            teamPlayerId: 1,
            name: "수정된 팀/플레이어",
            description: "수정합니다",
            type: "TEAM",
            revenueShareRate: 50,
            sportsId: 1,
         });
         console.log("결과", data);
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   };

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

   return { loading, product, state, controlPayModal, pay, setIconFile };
};

export default ProductLogic;
