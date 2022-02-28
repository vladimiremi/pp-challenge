import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 100%;
  margin-bottom: 0.7rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #34423d;
  padding: 1rem;
  border: 2px solid #b5f1dd;
  border-radius: 0.5rem;
  &:hover {
    filter: brightness(0.9);
    background-color: #b5f1dd;
  }

  div {
    margin-right: 10px;
  }
`;
