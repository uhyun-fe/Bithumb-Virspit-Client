import styled from "styled-components";

export const CenterFlexDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
`;

export const CenterColumnFlexDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
`;

export const LeftFlexDiv = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
`;

export const LeftColumnFlexDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   width: 100%;
`;

export const SpaceBetweenFlexDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

export const Button = styled.button`
   transition: opacity 0.1s ease-in-out;
   opacity: 1;
   &:hover {
      opacity: 0.8;
   }
   &:active {
      opacity: 0.9;
   }
`;

export const Main = styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 50px 0 100px;
`;
