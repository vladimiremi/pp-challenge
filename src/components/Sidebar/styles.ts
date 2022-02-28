import styled from "styled-components";

export const Container = styled.header`
  background: #ffffff;
  height: 100vh;
  width: 250px;

  @media (min-width: 1080px) {
    width: 250px;
  }

  @media (max-width: 1080px) {
    width: 95px;
  }

  @media (max-width: 720px) {
    width: 0px;
  }
`;
