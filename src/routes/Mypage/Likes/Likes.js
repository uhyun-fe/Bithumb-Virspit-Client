import React from "react";

// Styles
import { ListItemBox, TotalCount } from "./Likes.style";
import { CenterColumnFlexDiv } from "../../../assets/styles/basic.style";

// Components
import Loading from "../../../components/Loading/Loading";
import NFTCard from "../../../components/NFTCard/NFTCard";

// Logics
import LikesLogic from "./Likes.logic";

const Likes = ({ user, history }) => {
   const { loading, state, pickItem } = LikesLogic({ user, history });
   return (
      <CenterColumnFlexDiv>
         <Loading is_loading={loading} />
         <TotalCount>
            총 <strong>{state.total.toLocaleString("ko-KR")}</strong>개
         </TotalCount>
         <ListItemBox>
            {state.list.map((nft, i) => (
               <NFTCard key={i} nft={nft} line_count={4} setLike={(id, is_liked) => pickItem({ id, is_liked })} history={history} />
            ))}
            {state.list.length < 1 && <span className="no-item">관심상품이 없습니다</span>}
         </ListItemBox>
      </CenterColumnFlexDiv>
   );
};

export default Likes;
