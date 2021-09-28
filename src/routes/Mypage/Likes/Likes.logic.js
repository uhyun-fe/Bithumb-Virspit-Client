import React, { useEffect, useState } from "react";

// test
import testImage from "../../../assets/images/test.jpg";

const LikesLogic = ({ history }) => {
   const [state, setState] = useState({ total_count: 12, list: [] });

   useEffect(() => {
      getLikesList();
   }, []);

   // Get Searched List
   function getLikesList() {
      // test
      const testNFTList = [
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
         { id: 1, title: "테스트 NFT", imageUrl: testImage, is_liked: true },
      ];
      setState({ ...state, list: testNFTList });
   }

   return { state };
};

export default LikesLogic;
