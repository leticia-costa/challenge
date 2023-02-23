import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { HeaderProps } from "./types";

export const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <>
      <S.HeaderContainer data-testid="header">
        <S.HeaderDiv>
          <S.SidebarButton onClick={toggleSidebar}>
            <FontAwesomeIcon
              className="header-icons"
              icon={faBars as IconProp}
            />
          </S.SidebarButton>

          <S.HeaderTitle>ãcme</S.HeaderTitle>
        </S.HeaderDiv>
        <S.HeaderDiv className="right-header-div">
          <FontAwesomeIcon
            className="header-icons"
            icon={faCircleQuestion as IconProp}
          />
          <S.HeaderProfileIcon />
        </S.HeaderDiv>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
