import React from "react";
import { Link } from "react-router-dom";

// Logics
import PaymentsLogic from "./Payments.logic";

// Contents
import pathname from "../../../assets/contents/pathname";

// Components
import Pager from "../../../components/Pager/Pager";

// Styles
import { Button, CenterColumnFlexDiv, LeftColumnFlexDiv, LeftFlexDiv } from "../../../assets/styles/basic.style";
import { TotalCount, PaymentItemListBox, PaymentItemBox, SearchBox } from "./Payments.style";

const Payments = ({ history }) => {
   const { state, setSearchDate, getPaymentsList } = PaymentsLogic({ history });
   return (
      <LeftColumnFlexDiv>
         <SearchArea search_date={state.search_date} setSearchDate={setSearchDate} getPaymentsList={getPaymentsList} />
         <TotalCount>
            총 <strong>{state.total_count.toLocaleString("ko-KR")}</strong>개
         </TotalCount>
         <PaymentItemListBox>
            {state.list.map((item, i) => (
               <PaymentItem key={i} item={item} />
            ))}
         </PaymentItemListBox>
         <Pager page={1} count={12} total={200} paging={() => console.log("넘기기")} />
      </LeftColumnFlexDiv>
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
const PaymentItem = ({ item }) => {
   return (
      <PaymentItemBox>
         <div className="image-box">
            <img src={item.product.imageUrl} alt={item.product.title} />
         </div>
         <LeftColumnFlexDiv className="product-info">
            <p>
               [{item.product.sports}] {item.product.player}
            </p>
            <strong>
               <Link to={pathname.detail(item.product.id)}>{item.product.title}</Link>
            </strong>
            <p>
               <strong>{item.product.price}</strong> Klay <span>수량: {1}개</span>
            </p>
         </LeftColumnFlexDiv>
         <CenterColumnFlexDiv className="payment-info">
            <p>{item.created_at.replaceAll("-", ". ")} 결제</p>
            <Button>주문상세 &gt;</Button>
         </CenterColumnFlexDiv>
      </PaymentItemBox>
   );
};

export default Payments;
