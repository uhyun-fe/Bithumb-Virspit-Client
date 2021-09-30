import React from "react";

// Styles
import { ListItemBox, TotalCount } from "./Likes.style";
import { CenterColumnFlexDiv } from "../../../assets/styles/basic.style";

// Components
import NFTCard from "../../../components/NFTCard/NFTCard";
import Pager from "../../../components/Pager/Pager";

// Logics
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
         <Pager page={1} count={12} total={200} paging={() => console.log("넘기기")} />
      </CenterColumnFlexDiv>
   );
};

export default Likes;
