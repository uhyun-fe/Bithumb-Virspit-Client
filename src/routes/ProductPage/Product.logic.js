import React, { useEffect, useState } from "react";
// COntents
import cookie_text from "../../assets/contents/cookie_text";
// Api
import { orderApi, productApi, sportsApi, walletApi } from "../../utils/api";
import { klaytnWalletApi } from "../../utils/klaytnApi";

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
   const [state, setState] = useState({
      count: 1,
      pay_modal_on: false,
      done_modal_on: false,
      user: { memberName: null, email: null, phoneNumber: null },
      wallet: {
         address: null,
         balance: 0,
      },
   });

   useEffect(() => {
      setState({ ...state, user: JSON.parse(localStorage.getItem(cookie_text.user_info)) || state.user });
      getProductDetail();
   }, []);

   useEffect(() => {
      if (state.user.id) getWallet();
   }, [state.user]);

   // 상품 상세정보 조회
   const getProductDetail = async () => {
      try {
         setLoading(true);
         const {
            data: { data },
         } = await productApi.getProductDetail({ productId: product.id });
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

   // 결제모달 띄우기
   const controlDoneModal = (bool) => {
      setState({ ...state, done_modal_on: bool, pay_modal_on: bool });
   };

   // 결제하기
   const pay = async () => {
      if (!window.confirm("결제하시겠습니까?")) return;
      try {
         setLoading(true);
         const {
            data: { status },
            data,
         } = await orderApi.orderProduct({ memberId: state.user.id, productId: product.id });
         if (status === 200) {
            controlDoneModal(true);
         } else {
            alert("에러가 발생했습니다. 다시 시도해주세요.");
         }
      } catch (err) {
         console.error(err.response);
         if (err.response) alert(err.response.data.message);
      } finally {
         setLoading(false);
      }
   };

   /* 클레이 조회 관련 */

   // 지갑정보 조회
   const getWallet = async () => {
      try {
         setLoading(true);
         const { data } = await walletApi.getWalletInfo({ id: state.user.id });
         getKlayBalance({ address: data });
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   };

   // 클레이 잔액 조회
   const getKlayBalance = async ({ address }) => {
      try {
         const data = await klaytnWalletApi.getBalanceOfAccount(process.env.REACT_APP_TEST_AUTHORIZATION, address);
         setState({ ...state, wallet: { address, balance: parseFloat(data.data.result / 10 ** 18) } });
      } catch (e) {
         console.log(e.response);
      }
   };

   return { loading, product, state, controlPayModal, controlDoneModal, pay };
};

export default ProductLogic;
