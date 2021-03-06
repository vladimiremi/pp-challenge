import styled from "styled-components";

export const SectionAccordion = styled.section`
  background: #ffffff;
  margin-top: 0.1rem;
  padding: 1rem;
  border-radius: 0rem 0rem 0.4rem 0.4rem;
  h4 {
    color: #34423d;
    font-size: 1rem;
    padding: 2rem 0rem;
  }
`;

export const InformationsAccordion = styled.div`
  div {
    display: flex;
    margin-right: 1rem;
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.3rem;
      div {
        margin-bottom: 2rem;
      }

      label {
        font-weight: 600;
        color: #587169;
      }

      text {
        color: #587169;
      }
    }
  }
`;
