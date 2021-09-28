import React from "react";
import { LikesForm, ListItemBox } from './Likes.style';
import { CenterColumnFlexDiv, Button } from "../../../assets/styles/basic.style";

import HomeLogic from "../../HomePage/Home.logic";
import NFTCard from "../../../components/NFTCard/NFTCard";


const Likes = ({match, history}) => {
   const { state, categories, nftList, setSelectedCategoryId, setIsTeam } = HomeLogic({ match, history });

   return(
      <CenterColumnFlexDiv>
      <LikesForm>
         
      </LikesForm>
      </CenterColumnFlexDiv>
   ) ;
};

export default Likes;
