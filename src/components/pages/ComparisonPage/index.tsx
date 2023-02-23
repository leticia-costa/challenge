import { Button } from "../../atoms/Button";
import { Title } from "../../atoms/Title";
import * as S from "./styles";
import {
  faDownload,
  faCaretUp,
  faComment,
  faHeart,
  faChartLine,
  faTrophy,
  faCommentDots,
  faPeopleGroup,
  faSitemap,
  faThumbsUp,
  faCompass,
  faFaceSmile,
  faHeartCirclePlus,
  faSeedling,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import ComparisonTable from "../../molecules/ComparisonTable";
import data from "../../../constants/data.json";
import AnalysisTemplate from "../../templates/AnalysisTemplate";

export const ComparisonPage = () => {
  const dashboardColumns = [
    {
      label: "Participation (%)",
      icon: faComment,
    },
    {
      label: "eNPS",
      icon: faHeart,
    },
    {
      label: "Overall Engagement",
      icon: faChartLine,
    },
    {
      label: "Recgnition",
      icon: faTrophy,
    },
    {
      label: "Feedback",
      icon: faCommentDots,
    },
    {
      label: "Relationship with peers",
      icon: faPeopleGroup,
    },
    {
      label: "Relationship with manager",
      icon: faSitemap,
    },
    {
      label: "Satisfaction",
      icon: faThumbsUp,
    },
    {
      label: "Alignment",
      icon: faCompass,
    },
    {
      label: "Happiness",
      icon: faFaceSmile,
    },
    {
      label: "Wellness",
      icon: faHeartCirclePlus,
    },
    {
      label: "Personal grouth",
      icon: faSeedling,
    },
    {
      label: "Ambassadorship",
      icon: faFlag,
    },
  ];
  const dashboardFirstColumn = {
    label: "Teams",
    icon: faCaretUp,
  };

  return (
    <>
      <AnalysisTemplate>
        <S.DashboardContainer>
          <S.DashboardHeader>
            <Title>Comparison</Title>
            <Button icon={faDownload}>Export</Button>
          </S.DashboardHeader>
          <S.DashboardTable>
            <ComparisonTable
              columns={dashboardColumns}
              teamsRows={data.teams}
              benchmarkRow={data.benchmark}
              firstColumn={dashboardFirstColumn}
            />
          </S.DashboardTable>
        </S.DashboardContainer>
      </AnalysisTemplate>
    </>
  );
};

export default ComparisonPage;
