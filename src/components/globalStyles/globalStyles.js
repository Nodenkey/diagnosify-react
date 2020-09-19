import styled, {css} from "styled-components";


export const Section = styled.section`
  margin: 100px 0;
  ${props => props.pad && css`padding: 0 5vw`}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and (min-width: 600px){
    grid-template-columns: ${props => props.column && props.column};
  }
  ${props => props.central && css`
    justify-items: center;
  `};
  ${props => props.gap && css`
    grid-gap: 50px;
  `};
  ${props => props.centralH && css`
    align-items: center;
  `};
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  min-height: 450px;
  object-fit: cover;
`;

export const BigHeader = styled.h1`
  font-size: 1.6rem;
  color: black;
  line-height: 160%;
  max-width: 1000px;
  @media only screen and (min-width: 600px){
  font-size: 4rem;
  width: 70%;
  }
`;

export const HeaderTwo = styled.h2`
  font-size: 1.2rem;
  max-width: 1000px;
`;

export const HeaderThree = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 180%;
  margin-bottom: 50px;
  max-width: 1000px;
  @media only screen and (min-width: 600px){
    font-size: 2.5rem;
  }
  ${props => props.central && css`
    text-align: center;
    margin: 0 auto 50px;
`}
`;

export const Paragraph = styled.p`
  line-height: 220%;
  font-size: 1rem;
  max-width: 1000px;
`;
