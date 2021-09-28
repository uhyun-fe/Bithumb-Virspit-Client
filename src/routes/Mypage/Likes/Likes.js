import React from "react";

// Styles
import { ListItemBox, TotalCount } from "./Likes.style";
import { CenterColumnFlexDiv } from "../../../assets/styles/basic.style";

// Components
import NFTCard from "../../../components/NFTCard/NFTCard";
import LikesLogic from "./Likes.logic";

const Likes = ({ history }) => {
   const { state } = LikesLogic({ history });
   return (
      <CenterColumnFlexDiv>
         <TotalCount>
            총 <strong>{state.total_count.toLocaleString("ko-KR")}</strong>개
         </TotalCount>
         <ListItemBox>
            {state.list.map((nft, i) => (
               <NFTCard key={i} nft={nft} line_count={4} setLike={(id) => console.log("click like button" + id)} history={history} />
            ))}
         </ListItemBox>
      </CenterColumnFlexDiv>
   );
};

export default Likes;
