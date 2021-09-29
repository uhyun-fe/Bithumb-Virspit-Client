import React from "react";
import { Link } from "react-router-dom";

// Logics
import PaymentsLogic from "./Payments.logic";

// Contents
import pathname from "../../../assets/contents/pathname";

// Styles
import { Button, CenterColumnFlexDiv, LeftColumnFlexDiv, LeftFlexDiv } from "../../../assets/styles/basic.style";
import { TotalCount, PaymentItemBox, SearchBox } from "./Payments.style";

const Payments = ({ history }) => {
   const { state } = PaymentsLogic({ history });
   return (
      <LeftColumnFlexDiv>
         <SearchArea />
         <TotalCount>
            총 <strong>{state.total_count.toLocaleString("ko-KR")}</strong>개
         </TotalCount>
         <LeftColumnFlexDiv>
            {state.list.map((item, i) => (
               <PaymentItem key={i} item={item} />
            ))}
         </LeftColumnFlexDiv>
      </LeftColumnFlexDiv>
   );
};

// 검색창
const SearchArea = () => {
   return (
      <SearchBox>
         <h4>주문일</h4>
         <LeftFlexDiv className="search-input-box">
            <input type="date" />
            <span>-</span>
            <input type="date" />
         </LeftFlexDiv>
         <Button>검색</Button>
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
