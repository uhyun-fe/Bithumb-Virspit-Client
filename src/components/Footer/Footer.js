import React from "react";

// Styles
import { Container } from "./Footer.style";
// Images
import logoImage from "../../assets/images/logo.png";

const Footer = () => {
   return (
      <Container>
         <h2>
            <img src={logoImage} alt="virspit logo" />
         </h2>
         <p>Copyright © 2021 ViRSPiT. All rights reserved.</p>
      </Container>
   );
};

export default Footer;
