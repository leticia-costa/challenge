import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ComparisonPage from "./index";

describe("ComparisonPage", () => {
  it("renderiza o título corretamente", () => {
    render(<ComparisonPage />);
    expect(screen.getByText("Comparison")).toBeInTheDocument();
  });

  it("renderiza o botão de exportação", () => {
    render(<ComparisonPage />);
    expect(screen.getByRole("button", { name: "Export" })).toBeInTheDocument();
  });

  it("renderiza a tabela de comparação corretamente", () => {
    render(<ComparisonPage />);
    expect(screen.getByTestId("comparison-table")).toBeInTheDocument();
  });
});
