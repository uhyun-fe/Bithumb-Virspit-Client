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

const Mypage = ({ match, history, is_login }) => {
   const { user } = MypageLogic({ history, is_login });
   return (
      <div>
         <Menu_tab user_name={user.memberName} type={match.params.type} />
         {match.params.type === types.logout ? (
            <Logout user={user} />
         ) : match.params.type === types.payments ? (
            <Payments history={history} />
         ) : match.params.type === types.likes ? (
            <Likes history={history} />
         ) : match.params.type === types.myinfo ? (
            <Myinfo user={user} history={history} />
         ) : (
            <Mynfts />
         )}
      </div>
   );
};

export default Mypage;
