import React from "react";
import { Link } from "react-router-dom";

// Logics
import PaymentsLogic from "./Payments.logic";

// Contents
import pathname from "../../../assets/contents/pathname";

// Components
import Pager from "../../../components/Pager/Pager";
import Loading from "../../../components/Loading/Loading";
import Modal from "../../../components/Modal/Modal";
import Table from "../../../components/Table/Table";

// Styles
import { Button, CenterColumnFlexDiv, LeftColumnFlexDiv, LeftFlexDiv } from "../../../assets/styles/basic.style";
import { TotalCount, PaymentItemListBox, PaymentItemBox, SearchBox, PaymentModal } from "./Payments.style";

const Payments = ({ user, history }) => {
   const { loading, state, setSearchDate, getPaymentsList, selectePayment } = PaymentsLogic({ user, history });
   return (
      <>
         <LeftColumnFlexDiv>
            <Loading is_loading={loading} />
            <SearchArea search_date={state.search_date} setSearchDate={setSearchDate} getPaymentsList={getPaymentsList} />
            <TotalCount>
               총 <strong>{state.total_count.toLocaleString("ko-KR")}</strong>개
            </TotalCount>
            <PaymentItemListBox>
               {state.list.map((item, i) => (
                  <PaymentItem key={i} item={item} selectePayment={selectePayment} />
               ))}
            </PaymentItemListBox>
            {/* <Pager page={1} count={12} total={200} paging={() => console.log("넘기기")} /> */}
         </LeftColumnFlexDiv>
         {state.selected && (
            <Modal
               max_width={600}
               title="주문상세"
               contents={PaymentModalContents({ product: state.selected.product })}
               closing={() => selectePayment(null)}
            />
         )}
      </>
   );
};

// 검색창
const SearchArea = ({ search_date: s, setSearchDate, getPaymentsList }) => {
   return (
      <SearchBox>
         <h4>주문일</h4>
         <LeftFlexDiv className="search-input-box">
            <input type="date" value={s.start} max={s.max} onChange={({ target: { value } }) => setSearchDate({ column: "start", date: value })} />
            <span>-</span>
            <input type="date" value={s.end} max={s.max} onChange={({ target: { value } }) => setSearchDate({ column: "end", date: value })} />
         </LeftFlexDiv>
         <Button onClick={getPaymentsList}>검색</Button>
      </SearchBox>
   );
};

// 결제내역 아이템 컴포넌트
const PaymentItem = ({ item, selectePayment }) => {
   return (
      <PaymentItemBox>
         <div className="image-box">
            <img src={item.product.nftImageUrl} alt={item.product.title} />
         </div>
         <LeftColumnFlexDiv className="product-info">
            <p>
               [{item.product.sportsInfo.name}] {item.product.teamPlayerInfo.name}
            </p>
            <strong>
               <Link to={pathname.detail(item.product.id)}>{item.product.title}</Link>
            </strong>
            <p>
               <strong>{item.product.price}</strong> Klay
            </p>
         </LeftColumnFlexDiv>
         <CenterColumnFlexDiv className="payment-info">
            <p>{item.orderDate.substring(0, 10).replaceAll("-", ". ")} 결제</p>
            <Button onClick={() => selectePayment(item)}>주문상세 &gt;</Button>
         </CenterColumnFlexDiv>
      </PaymentItemBox>
   );
};

// 주문상세 모달 컨텐츠
const PaymentModalContents = ({ product }) => {
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
         {/* <details open>
            <summary>구매자정보</summary>
            <Table
               contents={[
                  { th: "이름", td: user.memberName },
                  { th: "이메일", td: user.email },
                  { th: "연락처", td: user.phoneNumber },
               ]}
            />
         </details> */}
         {/* <details open>
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
         </details> */}
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
      </PaymentModal>
   );
};

export default Payments;
