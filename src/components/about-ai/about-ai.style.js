import styled from "styled-components";


export const AboutAiWrapper = styled.section`
  text-align: left!important;
  height: 80vh;
  width: 100vw;
  margin-top: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image text';
  grid-gap: 100px;
`;


export const Image = styled.img`
  grid-area: image;
  object-fit: cover;
  object-position: 50% 10%;
  width: 100%;
  height: 100%;
`;

export const ThirdHeader = styled.h3`
  line-height: 180%;
`;
