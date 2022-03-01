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

      label {
        font-weight: 600;
        color: #587169;
      }

      text {
        color: #587169;
      }
    }

    &.active {
      div {
        width: 5rem;
        justify-content: center;
        background-color: var(--green);
        border-radius: 1rem;
        padding: 0.2rem 1rem;
        color: #34423d;
        text-align: center;
      }
    }

    &.inactive {
      div {
        width: 80%;
        justify-content: center;
        background-color: #eaefed;
        border-radius: 20px;
        padding: 0.2rem 0;
        color: #34423d;
        text-align: center;
      }
    }
  }
`;

export const ContainerTAble = styled.div`
  table {
    width: 100%;
    border-spacing: 0 0.3rem;
    border-collapse: separate;
    border-collapse: collapse;
    thead {
      tr {
        border: 1px solid #cad6d1;
        overflow: hidden;

        border-radius: 2px;
      }
    }

    th {
      border-radius: 3px;
      color: var(--text-body);
      background: var(--shape);
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-bottom: 2px solid #eaefed;
      /* border-radius: 0.25rem; */
      div {
        display: flex;
        align-items: center;
        max-width: 200px;
        img {
          width: 2.5rem;
          border-radius: 50%;
        }

        text {
          margin-left: 7px;
        }
      }

      &:first-child {
        color: var(--text-title);
        font-weight: 600;
      }

      &.active {
        div {
          width: 100%;
          justify-content: center;
          background-color: var(--green);
          border-radius: 1rem;
          padding: 0.2rem 0.7rem;
          color: #34423d;
        }
      }

      &.inactive {
        div {
          width: 100%;
          justify-content: center;
          background-color: #eaefed;
          border-radius: 1rem;
          padding: 0.2rem 0.7rem;
          color: #34423d;
        }
      }
    }
  }
`;
