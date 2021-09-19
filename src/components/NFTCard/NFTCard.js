import React from "react";

// Styles
import { Card, HoverBox, Like } from "./NFTCard.style";

const NFTCard = ({ nft, setLike, history }) => {
   return (
      <Card>
         <img src={nft.imageUrl} alt={nft.title} />
         <HoverBox onClick={() => history && history.push(`/nft/${nft.id}`)}>
            <strong>{nft.title}</strong>
            <p>[배구] 김연경</p>
            <p>10 Klay</p>
         </HoverBox>
         <Like className={true ? "is_like" : ""} onClick={() => setLike && setLike(nft.id)} />
      </Card>
   );
};

export default NFTCard;
