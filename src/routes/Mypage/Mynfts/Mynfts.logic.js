import React, { useEffect, useState } from "react";

// test
import testImage from "../../../assets/images/test.jpg";

const MynftsLogic = () => {
   const [state, setState] = useState({ total_count: 12, list: [] });

   useEffect(() => {
      getMynftsList();
   }, []);

   // Get Searched List
   function getMynftsList() {
      // test
      const testNFTList = [
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
         { id: 1, title: "테스트 NFT", imageUrl: testImage },
      ];
      setState({ ...state, list: testNFTList });
   }

   return { state };
};

export default MynftsLogic;
