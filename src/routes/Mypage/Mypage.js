import React from "react";

// Components
import Mynfts from "./Mynfts/Mynfts";
import Payments from "./Payments/Payments";
import Likes from "./Likes/Likes";
import Myinfo from "./Myinfo/Myinfo";
import Logout from "./Logout/Logout";

// Contents
import { types } from "../../assets/contents/pathname";
import MypageLogic from "./Mypage.logic";
import Menu_tab from "../../components/Menu_tab/Menu_tab";

const Mypage = ({ match, history }) => {
   const { user } = MypageLogic({ history });
   return (
      <div>
         <Menu_tab />
         {match.params.type === types.logout ? (
            <Logout />
         ) : match.params.type === types.payments ? (
            <Payments />
         ) : match.params.type === types.likes ? (
            <Likes />
         ) : match.params.type === types.myinfo ? (
            <Myinfo />
         ) : (
            <Mynfts />
         )}
      </div>
   );
};

export default Mypage;