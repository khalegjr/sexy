import { Default } from "./Card.stories";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("should render a card", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("product")).toBeInTheDocument();
  });
});
