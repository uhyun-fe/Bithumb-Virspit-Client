import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";

const ProductLogic = ({ history }) => {
   const [product, setProduct] = useState({});
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

   return { product };
};

export default ProductLogic;
