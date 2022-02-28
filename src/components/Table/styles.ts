import styled from "styled-components";

export const Container = styled.div`
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
