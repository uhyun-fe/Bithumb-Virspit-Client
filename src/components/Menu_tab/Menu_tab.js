import React from "react";
import { Link } from "react-router-dom";

import Welcome_user from "./Welcome_user";
import pathname, { types, types_titles } from "../../assets/contents/pathname";

// Styles
import { MenuTabBox } from "./Menu_tab.style";

export default function Menu_tab({ user_name, type }) {
   return (
      <MenuTabBox>
         <div className="back">
            <Welcome_user user_name={user_name} />
            <ul>
               {Object.keys(types).map((key, i) => (
                  <Link to={pathname.mypage(types[key])} key={i}>
                     <li className={type === types[key] ? "selected" : ""}>{types_titles[key]}</li>
                  </Link>
               ))}
            </ul>
         </div>
      </MenuTabBox>
   );
}
