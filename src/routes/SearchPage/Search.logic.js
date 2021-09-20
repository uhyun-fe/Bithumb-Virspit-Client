import React, { useEffect, useState } from "react";

// test
import testImage from "../../assets/images/test.jpg";

const SearchLogic = ({ match, history }) => {
   const [state, setState] = useState({ is_nft: true, total_count: 8, list: [] });

   useEffect(() => {
      getSearchedList();
   }, []);

   // Set Search Result Category
   const setResultCategory = ({ is_nft }) => {
      setState({ ...state, is_nft });
   };

   // Get Searched List
   function getSearchedList() {
      console.log(match.params.keyword);
      // test
      const testNFTList = [
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
      ];
      setState({ ...state, list: testNFTList });
   }

   return { state, setResultCategory };
};

export default SearchLogic;
