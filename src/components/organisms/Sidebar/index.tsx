import Dropdown from "../../molecules/Dropdown";
import * as S from "./styles";
import { SidebarProps } from "./types";
import { Option } from "../../molecules/Dropdown/types";
import { SIDEBAR_LINKS } from "../../../constants/sidebarLinks.";

export const Sidebar = ({ toggleSidebar }: SidebarProps) => {
  const handleSelect = (selectedOption: Option) => {
    console.log(selectedOption);
  };
  return (
    <>
      {toggleSidebar ? (
        <S.SidebarContainer data-testid="sidebar">
          {SIDEBAR_LINKS.map((link) => (
            <Dropdown
              label={link.label}
              options={link.options}
              onSelect={handleSelect}
              icon={link.icon}
            />
          ))}
        </S.SidebarContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
