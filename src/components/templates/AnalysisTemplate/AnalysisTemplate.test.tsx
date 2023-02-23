import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AnalysisTemplate from "./index";

describe("AnalysisTemplate", () => {
  it("renderiza o header corretamente", () => {
    render(<AnalysisTemplate children={undefined} />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
