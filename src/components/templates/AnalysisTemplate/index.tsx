import { useState } from "react";
import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";
import * as S from "./styles";
import { AnalysisTemplateProps } from "./types";

export const AnalysisTemplate = ({ children }: AnalysisTemplateProps) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  return (
    <>
      <S.Container>
        <Header
          toggleSidebar={() => setToggleSidebar((prevState) => !prevState)}
        />
        <S.Content>
          <Sidebar toggleSidebar={toggleSidebar} />
          {children}
        </S.Content>
      </S.Container>
    </>
  );
};

export default AnalysisTemplate;
