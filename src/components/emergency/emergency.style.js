import styled from "styled-components";

export const EmergencyLayout = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  height: 80vh;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 50px;
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
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  filter: grayscale(.5);
  }
`;