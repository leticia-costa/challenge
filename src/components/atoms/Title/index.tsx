import { StyledTitle } from "./styles";
import { TitleProps } from "./types";

export const Title = ({ children }: TitleProps) => {
  return (
    <>
      <StyledTitle>{children}</StyledTitle>
    </>
  );
};
