import { useRef, useState } from "react";
import type { DropdownProps, Option } from "./types";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Dropdown = ({ options, onSelect, label, icon }: DropdownProps) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (selectedOption: Option) => {
    setIsOpen(false);
    onSelect(selectedOption);
  };

  return (
    <S.DropdownContainer ref={containerRef}>
      <S.DropdownButton aria-label={label} onClick={() => setIsOpen(!isOpen)}>
        <>
          <FontAwesomeIcon className="dropdown-icon" icon={icon} />
          {label}
        </>
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          {options.map((option) => (
            <S.DropdownListItem
              key={option.value}
              onClick={() => handleClick(option)}
            >
              {option.label}
            </S.DropdownListItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
