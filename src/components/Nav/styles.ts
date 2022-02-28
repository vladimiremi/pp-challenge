import styled from "styled-components";

export const Container = styled.header`
  /* background: var(--blue); */
`;
export const Active = styled.header`
  border-bottom: 2px solid #22e0a1;
  font-weight: 600;
  outline: none;
`;

export const Content = styled.div`
  /* max-width: 1120px; */
  margin: 0 auto;
  padding: 2rem 0rem 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid #eaefed;
  margin-bottom: 3rem;

  div {
    padding: 0 3rem 0.6rem;
    a {
      text-decoration: none;
      font-size: 1rem;
      color: #a3b8b0;
      border: 0;
      height: 3rem;
      transition: filter 0.2s;
    }

    &:hover {
      filter: brightness(0.9);
      background: var(--green);
      border-radius: 0.3rem;
    }
  }
`;
