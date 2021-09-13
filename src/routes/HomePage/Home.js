import React from "react";

// Styles
import { AdSection, HomeContainer } from "./Home.style";
import { Button } from "../../assets/styles/basic.style";

const Home = () => {
   return (
      <HomeContainer>
         <AdSection bgImage={"http://image.kmib.co.kr/online_image/2021/0805/2021080520080495961_1628161684_0016139942.jpg"}>
            <h3>올림픽 신화 김연경의 새로운 NFT!</h3>
            <p>김연경 도쿄올림픽 특별한정 NFT</p>
            <Button>More</Button>
         </AdSection>
      </HomeContainer>
   );
};

export default Home;
