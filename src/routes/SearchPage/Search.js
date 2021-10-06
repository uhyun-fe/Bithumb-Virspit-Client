import React from "react";

// Logics
import SearchLogic from "./Search.logic";

// Styles
import { Button } from "../../assets/styles/basic.style";
import { SearchTopBox, ListItemBox } from "./Search.style";

// Components
import Loading from "../../components/Loading/Loading";
import NFTCard from "../../components/NFTCard/NFTCard";
import Pager from "../../components/Pager/Pager";

const Search = ({ match, history }) => {
   const { loading, state, setResultCategory, paging } = SearchLogic({ match, history });
   return (
      <SearchTopBox>
         <Loading is_loading={loading} />
         <h2>
            <strong>"{match.params.keyword}"</strong> 에 대한 검색결과
         </h2>
         {/* <div>
            <Button className={state.is_nft ? "selected" : ""} onClick={() => setResultCategory({ is_nft: true })}>
               NFT
            </Button>
            <Button className={state.is_nft ? "" : "selected"} onClick={() => setResultCategory({ is_nft: false })}>
               선수/팀
            </Button>
         </div> */}
         <p className="total-count">
            총 <strong>{state.total.toLocaleString("ko-KR")}</strong>개
         </p>
         <ListItemBox>
            {state.list.map((nft, i) => (
               <NFTCard key={i} nft={nft} line_count={4} setLike={(id) => console.log("click like button" + id)} history={history} />
            ))}
            {state.list.length < 1 && <span className="no-item">검색에 해당하는 상품이 없습니다</span>}
         </ListItemBox>
         <Pager page={state.page} count={state.size} total={state.total} paging={paging} />
      </SearchTopBox>
   );
};

export default Search;
