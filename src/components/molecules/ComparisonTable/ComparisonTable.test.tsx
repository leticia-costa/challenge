import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { render, screen } from "@testing-library/react";
import ComparisonTable from "./index";
import "@testing-library/jest-dom/extend-expect";

describe("ComparisonTable", () => {
  const props = {
    id: "comparison-table",
    teamsRows: [
      {
        name: "Team A",
        participation: 98,
        eNPS: 97,
        overallEngagement: 8.1,
        recgnition: 8.1,
        feedback: 8.1,
        relationshipWithPeers: 8.1,
        relationshipWithManager: 8.1,
        satisfaction: 8.1,
        alignment: 8.1,
        happiness: 8.1,
        wellness: 8.1,
        personalGrouth: 8.1,
        ambassadorship: 8.1,
      },
      {
        name: "Team B",
        participation: 99,
        eNPS: 97,
        overallEngagement: 8.1,
        recgnition: 8.1,
        feedback: 8.1,
        relationshipWithPeers: 8.1,
        relationshipWithManager: 8.1,
        satisfaction: 8.1,
        alignment: 8.1,
        happiness: 8.1,
        wellness: 8.1,
        personalGrouth: 8.1,
        ambassadorship: 8.1,
      },
    ],
    benchmarkRow: {
      name: "Benchmarck",
      participation: 97,
      eNPS: 97,
      overallEngagement: 8.1,
      recgnition: 8.1,
      feedback: 8.1,
      relationshipWithPeers: 8.1,
      relationshipWithManager: 8.1,
      satisfaction: 8.1,
      alignment: 8.1,
      happiness: 8.1,
      wellness: 8.1,
      personalGrouth: 8.1,
      ambassadorship: 8.1,
    },
    columns: [{ label: "Score", icon: faCaretUp }],
    firstColumn: { label: "Team", icon: faCaretUp },
  };

  it("renderiza a tabela de comparação corretamente", () => {
    render(<ComparisonTable {...props} />);
    expect(screen.getByTestId("comparison-table")).toBeInTheDocument();
  });

  it("renderiza o nome dos times corretamente", () => {
    render(<ComparisonTable {...props} />);
    expect(screen.getByText("Team A")).toBeInTheDocument();
    expect(screen.getByText("Team B")).toBeInTheDocument();
  });

  it("renderiza os scores corretamente", () => {
    render(<ComparisonTable {...props} />);
    expect(screen.getByText(98)).toBeInTheDocument();
    expect(screen.getByText(99)).toBeInTheDocument();
  });
});
