import styled from "styled-components";


export const AboutAiWrapper = styled.section`
  text-align: left!important;
  width: 100vw;
  margin-top: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
    height: 80vh;
    grid-gap: 100px;
  }
`;


export const Image = styled.img`
  height: 300px;
  object-fit: cover;
  object-position: 50% 10%;
  width: 100%;
  @media only screen and (min-width: 600px){
    height: 100%;
  }
`;

export const ThirdHeader = styled.h3`
  line-height: 180%;
`;
