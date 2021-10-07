import React from "react";

// Styles
import { ListItemBox, TotalCount } from "./Likes.style";
import { CenterColumnFlexDiv } from "../../../assets/styles/basic.style";

// Components
import Loading from "../../../components/Loading/Loading";
import NFTCard from "../../../components/NFTCard/NFTCard";
// import Pager from "../../../components/Pager/Pager";

// Logics
import LikesLogic from "./Likes.logic";

const Likes = ({ history }) => {
   const { loading, state } = LikesLogic({ history });
   return (
      <CenterColumnFlexDiv>
         <Loading is_loading={loading} />
         <TotalCount>
            총 <strong>{state.total.toLocaleString("ko-KR")}</strong>개
         </TotalCount>
         <ListItemBox>
            {state.list.map((nft, i) => (
               <NFTCard key={i} nft={nft} line_count={4} setLike={(id) => console.log("click like button" + id)} history={history} />
            ))}
            {state.list.length < 1 && <span className="no-item">관심상품이 없습니다</span>}
         </ListItemBox>
         {/* <Pager page={state.page} count={state.size} total={state.total} paging={() => console.log("넘기기")} /> */}
      </CenterColumnFlexDiv>
   );
};

export default Likes;
