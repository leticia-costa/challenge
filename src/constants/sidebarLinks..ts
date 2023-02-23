import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChartLine,
  faComment,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

export const SIDEBAR_LINKS = [
  {
    label: "Home",
    icon: faHome as IconProp,
    options: [],
  },
  {
    label: "Analysis",
    icon: faChartLine as IconProp,
    options: [
      { value: "surveyReport", label: "Survey report" },
      { value: "comparison", label: "Comparison" },
      { value: "customPolls", label: "Custom polls" },
    ],
  },
  {
    label: "Feedback",
    icon: faComment as IconProp,
    options: [],
  },
  {
    label: "Goals",
    icon: faBullseye as IconProp,
    options: [],
  },
];
