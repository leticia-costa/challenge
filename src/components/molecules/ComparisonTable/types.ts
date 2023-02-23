import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Rows = {
  name: string;
  participation: number;
  eNPS: number;
  overallEngagement: number;
  recgnition: number;
  feedback: number;
  relationshipWithPeers: number;
  relationshipWithManager: number;
  satisfaction: number;
  alignment: number;
  happiness: number;
  wellness: number;
  personalGrouth: number;
  ambassadorship: number;
};

export type TableProps = {
  benchmarkRow: Rows;
  teamsRows: Rows[];
  columns: {
    label: string;
    icon: IconProp;
  }[];
  firstColumn: {
    label: string;
    icon: IconProp;
  };
};
