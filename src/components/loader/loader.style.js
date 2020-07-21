import styled from "styled-components";

export const LoaderWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  display: flex;
`;

export const LoaderCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: var(--dark-blue);
`;