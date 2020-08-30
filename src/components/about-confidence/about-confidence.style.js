import styled from "styled-components";


export const AboutConfidenceWrapper = styled.section`
  padding: 100px 5vw 0;
  min-height: 60vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 100px 10vw;
  
  @media only screen and (min-width: 600px){
    grid-template-columns: 1.2fr 1fr;
    grid-template-areas: 
  'text image'
  'sub image'
  ;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  min-height: 300px;
  object-fit: cover;
  @media only screen and (min-width: 600px){
    grid-area: image;
    height: 100%;
  }
`;

export const MainConfidenceText = styled.h1`
  line-height: 150%;
  @media only screen and (min-width: 600px){
    grid-area: text;
  }
`;

export const Subtext = styled.p`
  color: grey;
  align-self: baseline;
  margin-bottom: 0;
  max-width: 300px;
  @media only screen and (min-width: 600px){
    grid-area: sub;
    margin-top: auto;
  }
`;