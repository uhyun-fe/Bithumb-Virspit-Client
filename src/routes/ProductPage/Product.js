import React from "react";

// Logics
import ProductLogic from "./Product.logic";

// Components
import Loading from "../../components/Loading/Loading";
// import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";

// Styles
import { Button, CenterColumnFlexDiv, CenterFlexDiv, SpaceBetweenFlexDiv, LeftColumnFlexDiv } from "../../assets/styles/basic.style";
import { InfoBox, ImageSection, SummarySection, PaymentModal } from "./Product.style";

// Contents
import pathname from "../../assets/contents/pathname";

const Product = ({ match, history, is_login }) => {
   const { loading, product, state, controlPayModal, pay, setIconFile } = ProductLogic({ match, history, is_login });
   return (
      <>
         <CenterColumnFlexDiv>
            {/* test */}
            {/* <input type="file" onChange={(e) => setIconFile(e)} /> */}
            <Loading is_loading={loading} />
            <InfoBox>
               <ImageSection>
                  <span className="image-box">
                     <img src={product.nftImageUrl} alt={product.title} />
                  </span>
               </ImageSection>
               <SummarySection>
                  <LeftColumnFlexDiv>
                     <p className="category">
                        [{product.sportsInfo.name}] {product.teamPlayerInfo.name}
                     </p>
                     <h2>{product.title}</h2>
                     <p className="desc">{product.description}</p>
                  </LeftColumnFlexDiv>
                  <LeftColumnFlexDiv>
                     <SpaceBetweenFlexDiv className="counter-box">
                        <strong>
                           {product.startDateTime.substring(0, 16).replaceAll("-", ". ")} <span>판매시작</span>
                        </strong>
                        {/* <QuantityCounter value={state.count} setValue={setCountNumber} /> */}
                        <span>
                           남은수량 <strong>{product.remainedCount.toLocaleString("ko-KR")}</strong>개
                        </span>
                     </SpaceBetweenFlexDiv>
                     <SpaceBetweenFlexDiv>
                        <Button
                           className={`buy-button${is_login && product.remainedCount ? " possible" : ""}`}
                           onClick={() => (is_login && product.remainedCount ? controlPayModal(true) : null)}
                        >
                           {!product.remainedCount ? "품절" : "구매하기"}
                        </Button>
                        <span className="price">
                           <strong>{product.price.toLocaleString("ko-KR")}</strong> Klay
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
               <img src={product.detailImageUrl} alt={product.title} />
            </CenterFlexDiv>
         </CenterColumnFlexDiv>
         {state.pay_modal_on && (
            <Modal max_width={600} title="NFT 구매하기" contents={PaymentModalContents({ product, pay })} closing={() => controlPayModal(false)} />
         )}
      </>
   );
};

const PaymentModalContents = ({ product, pay }) => {
   return (
      <PaymentModal>
         <details>
            <summary>상품정보</summary>
            <Table
               contents={[
                  { th: "상품 카테고리", td: `[${product.sportsInfo.name}] ${product.teamPlayerInfo.name}` },
                  { th: "상품명", td: product.title },
                  { th: "가격", td: product.price.toLocaleString("ko-KR") + " Klay" },
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
                  // {
                  //    th: "수량",
                  //    td: (
                  //       <>
                  //          <strong>{count}</strong> 개
                  //       </>
                  //    ),
                  // },
                  {
                     th: "총 상품가격",
                     td: (
                        <>
                           <strong>{product.price}</strong> Klay
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
