import React from "react";

// Components
import Modal from "../../../components/Modal/Modal";
import Loading from "../../../components/Loading/Loading";

// Logic
import MynftsLogic from "./Mynfts.logic";

// Styles
import { CenterColumnFlexDiv } from "../../../assets/styles/basic.style";
import { ListItemBox, TotalCount, MyCard } from "./Mynfts.style";

const Mynfts = ({ user }) => {
   const { loading, state, setSeletedNft } = MynftsLogic({ user });
   return (
      <>
         <CenterColumnFlexDiv tabIndex={0} onKeyDown={({ key }) => key === "Escape" && setSeletedNft(null)}>
            <Loading is_loading={loading} />
            <TotalCount>
               총 <strong>{state.total_count.toLocaleString("ko-KR")}</strong>개
            </TotalCount>
            <ListItemBox>
               {state.list.map((nft, i) => (
                  <MyCard key={i} line_count={4} onClick={() => setSeletedNft(nft)}>
                     <img src={nft.product.nftImageUrl} alt={nft.product.title} />
                  </MyCard>
               ))}
               {state.total_count < 1 && <span className="no-item">보유중인 NFT가 없습니다</span>}
            </ListItemBox>
            {state.selected && (
               <Modal
                  max_width={1024}
                  title={state.selected.product.itle}
                  contents={<img src={state.selected.product.nftImageUrl} />}
                  closing={() => setSeletedNft(null)}
               />
            )}
         </CenterColumnFlexDiv>
      </>
   );
};

export default Mynfts;
