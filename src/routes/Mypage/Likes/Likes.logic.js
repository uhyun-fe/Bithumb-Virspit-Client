import React, { useEffect, useState } from "react";

// test
import testImage from "../../../assets/images/test.jpg";
import { likeApi } from "../../../utils/api";

const LikesLogic = ({ history }) => {
   const [loading, setLoading] = useState(false);
   const [state, setState] = useState({ total_count: 12, list: [] });

   useEffect(() => {
      getLikesList();
   }, []);

   // Get Searched List
   async function getLikesList() {
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

      try {
         setLoading(true);
         const { data } = await likeApi.getLikesList({ id: 1 });
         console.log("좋아요 내역", data);
      } catch (err) {
         console.error(err.response);
      } finally {
         setLoading(false);
      }
   }

   return { loading, state };
};

export default LikesLogic;
