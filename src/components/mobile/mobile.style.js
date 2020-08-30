import styled from "styled-components";
import Phone from "../../assets/images/mobile.jpg";

export const MobileWrapper = styled.main`
  background-image: url(${Phone});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &::before{
    content: '';
    background-color: rgba(0, 0, 0, .6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  h1{
  font-size: 4rem;
  }
  h1, h4{
    position: relative;
    color: white;
    z-index: 2;
    max-width: 1000px;
    @media only screen and (min-width: 600px){   
      width: 100%;
      padding: 5%; 
    }
  }
`;