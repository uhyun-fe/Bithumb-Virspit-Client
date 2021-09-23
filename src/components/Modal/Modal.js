import React from "react";

// Styles
import { Button, SpaceBetweenFlexDiv } from "../../assets/styles/basic.style";
import { ModalArea } from "./Modal.style";

const Modal = ({ max_width, title, contents, closing }) => {
   return (
      <ModalArea width_percent={max_width}>
         <div className="modal">
            <SpaceBetweenFlexDiv className="top">
               <h4>{title}</h4>
               <Button onClick={closing}>X</Button>
            </SpaceBetweenFlexDiv>
            <div className="contents">{contents}</div>
         </div>
      </ModalArea>
   );
};

export default Modal;
