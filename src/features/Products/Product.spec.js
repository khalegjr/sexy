import { Default, productQty } from "./Products.stories";
import { render, screen } from "@testing-library/react";

describe("Containers/Products", () => {
  it("should render a list of products", () => {
    render(<Default {...Default.args} />);
    expect(screen.getAllByTestId("product")).toHaveLength(productQty);
  });
});
