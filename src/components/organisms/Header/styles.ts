import styled from "styled-components";
import profileIcon from "../../../assets/images/profile-icon.jpg";
export const HeaderContainer = styled.div`
  width: auto;
  height: 4.5rem;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(191, 199, 208, 0.24);
  font-family: "Open Sans";
  .header-icons {
    width: 1.5rem;
    height: 1.5rem;
    color: #909196;
  }
  .right-header-div {
    justify-content: end;
  }
`;

export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SidebarButton = styled.button`
  border: none;
  background: none;
  transform: rotate(0deg);
  cursor: pointer;
`;

export const HeaderTitle = styled.h1`
  margin-left: 1rem;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #2678ff;
`;

export const HeaderProfileIcon = styled.div`
  height: 2rem;
  width: 2rem;
  margin-left: 1rem;
  background-image: url(${profileIcon});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`;
