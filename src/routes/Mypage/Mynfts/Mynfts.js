import React from "react";

// Logic
import MynftsLogic from "./Mynfts.logic";

// Styles
import { CenterColumnFlexDiv } from "../../../assets/styles/basic.style";
import { ListItemBox, TotalCount, MyCard } from "./Mynfts.style";

const Mynfts = () => {
   const { state } = MynftsLogic();
   return (
      <CenterColumnFlexDiv>
         <TotalCount>
            총 <strong>{state.total_count.toLocaleString("ko-KR")}</strong>개
         </TotalCount>
         <ListItemBox>
            {state.list.map((nft, i) => (
               <MyCard key={i} line_count={4}>
                  <img src={nft.imageUrl} alt={nft.title} />
               </MyCard>
            ))}
         </ListItemBox>
      </CenterColumnFlexDiv>
   );
};

export default Mynfts;
