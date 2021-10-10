import React from "react";

// Logics
import HomeLogic from "./Home.logic";

// Components
import Category from "../../components/Category/Category";
import Loading from "../../components/Loading/Loading";
import Pager from "../../components/Pager/Pager";

// Styles
import { AdSection, MainSection, CategoryBox, ListItemBox, ListTitleBox } from "./Home.style";
import { Button, CenterColumnFlexDiv } from "../../assets/styles/basic.style";
import NFTCard from "../../components/NFTCard/NFTCard";
import pathname from "../../assets/contents/pathname";

const Home = ({ match, history, is_login }) => {
   const { loading, state, adver, categories, nftList, setSelectedCategoryId, setIsTeam, pickItem, paging } = HomeLogic({ match, history, is_login });
   return (
      <CenterColumnFlexDiv>
         <Loading is_loading={loading} />
         {adver.length > 0 && (
            <AdSection bgImage={adver[0].product.nftImageUrl}>
               <h3>{adver[0].description}</h3>
               <p>{adver[0].product.title}</p>
               <Button onClick={() => history.push(pathname.detail(adver[0].product.id))}>More</Button>
            </AdSection>
         )}
         <MainSection>
            <CategoryBox>
               <Category categories={categories} selected_id={state.category_id} selectCategory={setSelectedCategoryId} />
            </CategoryBox>
            <CenterColumnFlexDiv>
               <ListTitleBox>
                  <h2>{categories.length > 0 && categories.find((c) => c.id === state.category_id).name}</h2>
                  <div>
                     <Button className={state.is_team ? "" : "selected"} onClick={() => setIsTeam(false)}>
                        개인
                     </Button>
                     <Button className={state.is_team ? "selected" : ""} onClick={() => setIsTeam(true)}>
                        팀
                     </Button>
                  </div>
               </ListTitleBox>
               <ListItemBox>
                  {nftList.length < 1 && <span className="no-item">해당 종목에 등록된 상품이 없습니다</span>}
                  {nftList.map((nft, i) => (
                     <NFTCard key={i} nft={nft} line_count={3} setLike={(id, is_liked) => pickItem({ id, is_liked })} history={history} />
                  ))}
               </ListItemBox>
               <Pager page={state.page} count={state.size} total={state.total} paging={paging} />
            </CenterColumnFlexDiv>
         </MainSection>
      </CenterColumnFlexDiv>
   );
};

export default Home;
