import React from "react";

// Logics
import ProductLogic from "./Product.logic";

// Components
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";

// Styles
import { Button, CenterColumnFlexDiv, CenterFlexDiv, SpaceBetweenFlexDiv, LeftColumnFlexDiv } from "../../assets/styles/basic.style";
import { InfoBox, ImageSection, SummarySection } from "./Product.style";

// Contents
import pathname from "../../assets/contents/pathname";

const Product = ({ match, history }) => {
   const { product, state, setCountNumber } = ProductLogic({ history });
   const is_logined = false;
   return (
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
                     <Button className={`buy-button${is_logined ? " possible" : ""}`}>구매하기</Button>
                     <span className="price">
                        <strong>{product.price * state.count}</strong> Klay
                     </span>
                  </SpaceBetweenFlexDiv>
                  {!is_logined && (
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
   );
};

export default Product;
