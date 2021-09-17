import React from "react";

// Styles
import { Card, HoverBox, Like } from "./NFTCard.style";

const NFTCard = ({ nft, setLike }) => {
   return (
      <Card>
         <img src={nft.imageUrl} alt={nft.title} />
         <HoverBox>
            <strong>{nft.title}</strong>
            <p>[배구] 김연경</p>
            <p>10 Klay</p>
         </HoverBox>
         <Like className={true ? "is_like" : ""} onClick={() => console.log("click like button")} />
      </Card>
   );
};

export default NFTCard;
