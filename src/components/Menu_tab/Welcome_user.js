import React from "react";
import styled from "styled-components";

export default function Welcome_user({ user_name }) {
   return (
      <Box>
         <div className="welcome_text">
            <span className="user_name">{user_name}</span>님,
            <div>반갑습니다!</div>
         </div>
      </Box>
   );
}

const Box = styled.div`
   .welcome_text {
      text-align: left;
      font-size: 35px;
      font-weight: bold;
      line-height: 40px;
      margin-bottom: 30px;
   }

   .user_name {
      color: var(--main);
   }
`;
