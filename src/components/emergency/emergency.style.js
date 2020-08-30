import styled from "styled-components";

export const EmergencyLayout = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  >div{
  order: 2
  }
  h1{
  text-align: left;
  line-height: 150%;
  margin-bottom: 40px;
  }
  p{
  line-height: 240%;
  text-align: left;
  }
  img{
  height: 300px;
  object-fit: cover;
  order: 1;
  object-position: center;
  width: 100%;
  filter: grayscale(.5);
  }
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1.5fr;
    height: 80vh;
    >div{
    order: 1
    }
    img{
    order: 2;
    height: 100%
    }
  }
`;