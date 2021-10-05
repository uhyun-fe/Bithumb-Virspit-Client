import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";
import { productApi } from "../../utils/api";

const SearchLogic = ({ match, history }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({ is_nft: true, total: 0, list: [], page: 1, size: 4 });

   useEffect(() => {
      getSearchedList();
   }, []);

   // Set Search Result Category
   const setResultCategory = ({ is_nft }) => {
      setState({ ...state, is_nft });
   };

   // Get Searched List
   async function getSearchedList() {
      console.log(match.params.keyword);
      // test
      // const testNFTList = [
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      //    { id: 1, title: "테스트 NFT", imageUrl: testImage },
      // ];

      // try {
      //    setLoading(true);
      //    const { data } = await productApi.getSearchedProductList({});
      //    console.log("상품정보", data);
      //    // setProduct(data);
      // } catch (err) {
      //    console.error(err.response);
      // } finally {
      //    setLoading(false);
      // }
      // // setState({ ...state, list: testNFTList });
   }

   return { loading, state, setResultCategory };
};

export default SearchLogic;
