import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #f8f8f8;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 425.9px) {
    flex-direction: row;
  }
`;
