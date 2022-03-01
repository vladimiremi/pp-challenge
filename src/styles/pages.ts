import styled from "styled-components";

export const ContainerDesktop = styled.div`
  padding: 2rem;
  max-width: 1200px;

  h1 {
    font-size: 2rem;
    padding: 0 0rem 0.7rem;
  }

  h4 {
    color: #34423d;
    padding: 2rem 0rem;
    font-size: 16px;
  }

  div {
    &.container-desktop {
      background-color: #ffffff;
      padding: 1rem;
    }
  }
`;

export const ContainerMobile = styled.div`
  h1 {
    font-size: 1.6rem;
    padding: 0 1rem 1rem;
  }

  section {
    width: 100%;
    &.container-mobile {
      padding: 1rem;

      > section {
        :first-child {
          background-color: #ffffff;
          padding: 1rem 1rem 2.5rem;
          border-radius: 0.4rem 0.4rem 0rem 0rem;
        }
      }
    }
  }
`;
