import React from "react";
import "./Welcome_user.css";

export default function Welcome_user({ user_name }) {
   return (
      <div>
         <div className="welcome_text">
            <span className="user_name">{user_name}</span>님,
            <div>반갑습니다!</div>
         </div>
      </div>
   );
}
