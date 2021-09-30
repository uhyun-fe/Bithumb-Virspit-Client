import React from "react";

// Components
import Modal from "../../../components/Modal/Modal";

// Logic
import MynftsLogic from "./Mynfts.logic";

// Styles
import { CenterColumnFlexDiv } from "../../../assets/styles/basic.style";
import { ListItemBox, TotalCount, MyCard } from "./Mynfts.style";

const Mynfts = () => {
   const { state, setSeletedNft } = MynftsLogic();
   return (
      <>
         <CenterColumnFlexDiv tabIndex={0} onKeyDown={({ key }) => key === "Escape" && setSeletedNft(null)}>
            <TotalCount>
               총 <strong>{state.total_count.toLocaleString("ko-KR")}</strong>개
            </TotalCount>
            <ListItemBox>
               {state.list.map((nft, i) => (
                  <MyCard key={i} line_count={4} onClick={() => setSeletedNft(nft)}>
                     <img src={nft.imageUrl} alt={nft.title} />
                  </MyCard>
               ))}
            </ListItemBox>
            {state.selected && (
               <Modal
                  max_width={1024}
                  title={state.selected.title}
                  contents={<img src={state.selected.imageUrl} />}
                  closing={() => setSeletedNft(null)}
               />
            )}
         </CenterColumnFlexDiv>
      </>
   );
};

export default Mynfts;
