import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";

const HomeLogic = () => {
   const [state, setState] = useState({ category_id: 0, is_team: false });
   const [categories, setCategories] = useState([]);
   const [nftList, setNftList] = useState([]);

   useEffect(() => {
      // test
      const testCategories = [
         { id: 0, title: "ALL" },
         { id: 1, title: "축구" },
         { id: 2, title: "배구" },
      ];
      setCategories(testCategories);
   }, []);

   useEffect(() => {
      // test
      const testNFTList = [
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
      ];
      setNftList(testNFTList);
   }, [state.category_id]);

   // set selected category
   const setSelectedCategoryId = (id) => {
      setState({ ...state, category_id: id });
   };

   // set selected is_team
   const setIsTeam = (bool) => {
      setState({ ...state, is_team: bool });
   };

   return { state, categories, nftList, setSelectedCategoryId, setIsTeam };
};

export default HomeLogic;
