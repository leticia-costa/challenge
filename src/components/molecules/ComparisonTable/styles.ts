import styled, { css } from "styled-components";

type tdRowsProps = {
  tdColor?: string | undefined;
};

export const Table = styled.table`
  width: 100%;
  height: 100%;
  padding: 2rem;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #1c1e2a;
  background: #ffffff;
`;

export const Thead = styled.thead``;

export const TrColumns = styled.tr`
  margin: 0 auto;
`;

export const ThFirstColumn = styled.th`
  width: auto;
  max-width: 258px;
  height: 235px;
  font-weight: 700;
  border: 1px solid #f1f1f5;
  color: #1c1e2a;
  background: #ffffff;
  .icon {
    color: #2678ff;
  }
  @media (min-width: 1280.9px) {
    width: 258px;
  }
`;

export const ThColumns = styled.th`
  height: 235px;
  width: 45px;
  max-width: 45px;
  color: #62656c;
  background: #f8f8f8;
  border: 1px solid #f1f1f5;
  .icon {
    color: #bfc7d0;
  }
`;

export const FirstColumnContent = styled.div`
  height: 235px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: start;
  .icon {
    margin-left: 1rem;
  }
`;

export const ColumnContent = styled.div`
  height: 235px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .icon {
    margin-top: 1rem;
  }
`;

export const FirstColumnLabel = styled.p`
  margin: 0;
`;

export const ColumnLabel = styled.p`
  width: 200px;
  position: relative;
  bottom: -80px;
  text-align: left;
  transform: rotate(270deg);
`;
export const TdRows = styled.td<tdRowsProps>`
  ${({ tdColor }) => css`
    height: 35px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    background: ${tdColor ? tdColor : "#ffffff"};
    border: none;
    :first-child {
      border: 1px solid #f1f1f5;
    }
  `}
`;

export const TrRows = styled.tr``;
