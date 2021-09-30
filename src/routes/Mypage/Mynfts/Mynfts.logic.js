import React, { useEffect, useState } from "react";

// test
import testImage from "../../../assets/images/test.jpg";

const MynftsLogic = () => {
   const [state, setState] = useState({ total_count: 12, list: [], selected: null });

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

   // Set Selected NFT
   function setSeletedNft(nft) {
      setState({ ...state, selected: nft });
   }

   return { state, setSeletedNft };
};

export default MynftsLogic;
