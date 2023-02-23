import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
  background: #ffffff;
`;

export const DropdownButton = styled.button`
  height: 66px;
  width: 100%;
  padding: 8px;
  border: none;
  background: #ffffff;
  color: #62656c;
  text-align: left;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  cursor: pointer;
  .dropdown-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    color: #62656c;
  }
`;

export const DropdownList = styled.ul`
  width: 100%;
  height: fit-content;
  padding: 0;
  margin: 0;
  background: #ffffff;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
`;

export const DropdownListItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  padding-left: 4rem;
  cursor: pointer;
  &:hover {
    font-weight: 700;
    border-left: 4px solid #2678ff;
  }
`;
