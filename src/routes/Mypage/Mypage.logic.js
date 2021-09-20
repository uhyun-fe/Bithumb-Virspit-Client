import React, { useEffect, useState } from "react";

const MypageLogic = ({ history }) => {
   const [user, setUser] = useState({});

   useEffect(() => {
      //test
      const testuser = {
         id: 1,
         name: "최유현",
         email: "test@test.com",
      };
      setUser(testuser);
   }, []);

   return { user };
};

export default MypageLogic;
