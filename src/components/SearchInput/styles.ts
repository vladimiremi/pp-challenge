import styled from "styled-components";

export const Container = styled.header`
  background: #ffffff;
  /* height: 100vh;
  width: 250px; */
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    label {
      position: absolute;
      padding: 0 0.3rem 0;
      font-size: 0.9rem;
      background-color: #ffffff;
      left: 1.2rem;
      bottom: 3rem;
      color: #cad6d1;
    }
    input {
      padding: 1rem 3rem 1rem;
      border: 2px solid #cad6d1;
      border-radius: 0.8rem;
    }
    .icon {
      position: absolute;
      justify-content: center;
      left: 1.2rem;
    }
  }
`;
