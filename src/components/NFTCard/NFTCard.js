import React from "react";

// Contents
import pathname from "../../assets/contents/pathname";
// Styles
import { Card, HoverBox, Like } from "./NFTCard.style";

const NFTCard = ({ nft, line_count, setLike, history }) => {
   return (
      <Card line_count={line_count}>
         <img src={nft.nftImageUrl} alt={nft.title} />
         <HoverBox onClick={() => history && history.push(pathname.detail(nft.id))}>
            <strong>{nft.title}</strong>
            <p>
               [{nft.sportsInfo.name}] {nft.teamPlayerInfo.name}
            </p>
            <p>{nft.price} Klay</p>
         </HoverBox>
         <Like className={nft.is_liked ? "is_like" : ""} onClick={() => setLike(nft.id, nft.is_liked)} />
      </Card>
   );
};

export default NFTCard;
