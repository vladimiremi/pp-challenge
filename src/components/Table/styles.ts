import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 100%;
    border-spacing: 0 0.3rem;
    border-collapse: collapse;

    thead {
      border: 1px solid #cad6d1;
    }

    th {
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
      /* border-radius: 0.25rem; */
      div {
        display: flex;
        align-items: center;
        max-width: 200px;
        img {
          width: 2.5rem;
          margin-right: 7px;
          border-radius: 50%;
        }
      }

      &:first-child {
        color: var(--text-title);
        font-weight: 600;
      }

      &.active {
        div {
          width: 80%;
          justify-content: center;
          background-color: var(--green);
          border-radius: 10px;
          padding: 0.2rem 0;
          color: #34423d;
        }
      }

      &.inactive {
        div {
          width: 80%;
          justify-content: center;
          background-color: #eaefed;
          border-radius: 10px;
          padding: 0.2rem 0;
          color: #34423d;
        }
      }
    }
  }
`;
