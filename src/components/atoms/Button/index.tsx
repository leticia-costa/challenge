import { StyledButton } from "./styles";
import { ButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Button = ({
  children,
  icon,
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <>
      <StyledButton className={className} onClick={onClick} disabled={disabled}>
        <>
          <FontAwesomeIcon className="icon" icon={icon as IconProp} />
          {children}
        </>
      </StyledButton>
    </>
  );
};
