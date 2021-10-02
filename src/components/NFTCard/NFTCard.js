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
               [{"?"}] {"?"}
            </p>
            <p>{nft.price} Klay</p>
         </HoverBox>
         <Like className={nft.is_liked ? "is_like" : ""} onClick={() => setLike && setLike(nft.id)} />
      </Card>
   );
};

export default NFTCard;
