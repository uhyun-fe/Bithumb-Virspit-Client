import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";

const ProductLogic = ({ history }) => {
   const [product, setProduct] = useState({ price: 0 });
   const [state, setState] = useState({ count: 1 });

   useEffect(() => {
      const test = {
         id: 1,
         title: "테스트 NFT",
         sports: "축구",
         player: "박지성",
         price: 10,
         thumbnailUrl: testImage,
         detailUrl: testImage,
         description:
            "이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.이 상품은 축구종목 박지성의 이런 상품입니다.",
      };
      setProduct(test);
   }, []);

   // 수량 변경
   const setCountNumber = (v) => {
      if (!v) return;
      if (parseInt(v) < 1 || parseInt(v) > 999) return;
      setState({ ...state, count: parseInt(v) });
   };

   return { product, state, setCountNumber };
};

export default ProductLogic;
