import styled from "styled-components";


export const AboutLandingWrapper = styled.section`
  height: 60vh;
  width: 100vw;
  padding: 96px 5vw 30px;
  display: flex;
  align-items: center;
  background-color: var(--blue);
  @media only screen and (min-width: 600px){
  height: 100vh;
  }
`;

export const BigHeader = styled.h1`
  font-size: 1.6rem;
  color: black;
  line-height: 160%;
  @media only screen and (min-width: 600px){
  font-size: 4rem;
  width: 70%;
  }
`;