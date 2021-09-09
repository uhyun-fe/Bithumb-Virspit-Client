import styled from "styled-components";

export const CenterFlexDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const CenterColumnFlexDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const SpaceBetweenFlexDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Button = styled.button`
   transition: 0.1s ease-in-out;
   opacity: 1;
   &:hover {
      opacity: 0.8;
   }
   &:active {
      opacity: 0.9;
   }
`;
