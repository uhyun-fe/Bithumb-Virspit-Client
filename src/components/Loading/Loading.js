import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Images
import loadingGif from "../../assets/icons/loading.gif";
// Styles
import { CenterFlexDiv } from "../../assets/styles/basic.style";

const Loading = ({ is_loading }) => {
   const loadingRef = useRef(is_loading);
   loadingRef.current = is_loading;
   const [fakeLoading, setFakeLoading] = useState(false);

   useEffect(() => {
      if (is_loading) {
         // 로딩이 0.5초 이상 걸릴때만 로딩화면 띄움
         setTimeout(() => {
            if (loadingRef.current) setFakeLoading(true);
         }, 500);
      } else setFakeLoading(false);
   }, [is_loading]);

   return (
      <LoadingBox className={fakeLoading ? "is_loading" : "none"}>
         <img src={loadingGif} alt="loading" />
      </LoadingBox>
   );
};

const LoadingBox = styled(CenterFlexDiv)`
   z-index: 2;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   min-height: 20px;
   background: var(--white);
   opacity: 0.7;
   img {
      width: 20%;
   }
   &.none {
      display: none;
   }
`;

export default Loading;
