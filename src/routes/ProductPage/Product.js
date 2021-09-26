import React from "react";

// Logics
import ProductLogic from "./Product.logic";

// Components
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";

// Styles
import { Button, CenterColumnFlexDiv, CenterFlexDiv, SpaceBetweenFlexDiv, LeftColumnFlexDiv } from "../../assets/styles/basic.style";
import { InfoBox, ImageSection, SummarySection, PaymentModal } from "./Product.style";

// Contents
import pathname from "../../assets/contents/pathname";

const Product = ({ match, history, is_login }) => {
   const { product, state, setCountNumber, controlPayModal, pay } = ProductLogic({ history, is_login });
   return (
      <>
         <CenterColumnFlexDiv>
            <InfoBox>
               <ImageSection>
                  <span className="image-box">
                     <img src={product.thumbnailUrl} alt={product.title} />
                  </span>
               </ImageSection>
               <SummarySection>
                  <LeftColumnFlexDiv>
                     <p className="category">
                        [{product.sports}] {product.player}
                     </p>
                     <h2>{product.title}</h2>
                     <p className="desc">{product.description}</p>
                  </LeftColumnFlexDiv>
                  <LeftColumnFlexDiv>
                     <SpaceBetweenFlexDiv className="counter-box">
                        <strong>{product.title}</strong>
                        <QuantityCounter value={state.count} setValue={setCountNumber} />
                     </SpaceBetweenFlexDiv>
                     <SpaceBetweenFlexDiv>
                        <Button className={`buy-button${is_login ? " possible" : ""}`} onClick={() => (is_login ? controlPayModal(true) : null)}>
                           구매하기
                        </Button>
                        <span className="price">
                           <strong>{product.price * state.count}</strong> Klay
                        </span>
                     </SpaceBetweenFlexDiv>
                     {!is_login && (
                        <span className="login-guide">
                           * 본 상품은 로그인 후 구매가능합니다. <Button onClick={() => history.push(pathname.login)}>로그인하기</Button>
                        </span>
                     )}
                  </LeftColumnFlexDiv>
               </SummarySection>
            </InfoBox>
            <CenterFlexDiv>
               <img src={product.detailUrl} alt={product.title} />
            </CenterFlexDiv>
         </CenterColumnFlexDiv>
         {state.pay_modal_on && (
            <Modal
               max_width={600}
               title="NFT 구매하기"
               contents={PaymentModalContents({ count: state.count, product, pay })}
               closing={() => controlPayModal(false)}
            />
         )}
      </>
   );
};

const PaymentModalContents = ({ count, product, pay }) => {
   return (
      <PaymentModal>
         <details>
            <summary>상품정보</summary>
            <Table
               contents={[
                  { th: "상품 카테고리", td: `[${product.sports}] ${product.player}` },
                  { th: "상품명", td: product.title },
                  { th: "가격", td: product.price + " Klay" },
               ]}
            />
         </details>
         <details open>
            <summary>구매자정보</summary>
            <Table
               contents={[
                  { th: "이름", td: "최유현" },
                  { th: "이메일", td: "test@test.com" },
                  { th: "연락처", td: "010-1111-2222" },
               ]}
            />
         </details>
         <details open>
            <summary>지갑정보</summary>
            <Table
               contents={[
                  { th: "지갑주소", td: "test_wallet_address" },
                  {
                     th: "잔액",
                     td: (
                        <>
                           <strong>{"123"}</strong> Klay
                        </>
                     ),
                  },
               ]}
            />
         </details>
         <details open>
            <summary>결제정보</summary>
            <Table
               contents={[
                  {
                     th: "수량",
                     td: (
                        <>
                           <strong>{count}</strong> 개
                        </>
                     ),
                  },
                  {
                     th: "총 상품가격",
                     td: (
                        <>
                           <strong>{count * product.price}</strong> Klay
                        </>
                     ),
                  },
               ]}
            />
         </details>
         <Button onClick={pay}>결제하기</Button>
      </PaymentModal>
   );
};

export default Product;
