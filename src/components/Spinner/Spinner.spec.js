import {
  Default,
  CustomMessage,
  Red,
  Blue,
  Green,
  Yellow,
  Orange,
  Unknown,
} from "./Spinner.stories";
import { customColors } from "./Spinner";
import { render, screen } from "@testing-library/react";

describe("Components > Spinner", () => {
  it("should render a spinner with default state", () => {
    render(<Default />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument(); // usa ER para encontrar a frase sem diferenciar maiúsculas e minúsculas
  });

  it("should render a spinner with custom message", () => {
    render(<CustomMessage {...CustomMessage.args} />);
    expect(screen.getByText(/Please wait.../i)).toBeInTheDocument(); // usa ER para encontrar a frase sem diferenciar maiúsculas e minúsculas
  });

  describe("Variants", () => {
    const components = {
      Red: Red,
      Blue: Blue,
      Green: Green,
      Yellow: Yellow,
      Orange: Orange,
      Unknown: Unknown,
    };

    const testCases = [
      ["Red", customColors.red],
      ["Blue", customColors.blue],
    ];

    it.each(testCases)(
      "Should render a %s Spinner with color %s",
      ([variant, expected]) => {
        const Component = components[variant];

        render(<Component {...Component.args} />);

        expect(screen.getByTestId("spinner")).toHaveStyle({
          "border-color": expected,
        });
      }
    );

    // it("should render a spinner with red variant", () => {
    //   render(<Red {...Red.args} />);

    //   expect(screen.getByTestId("spinner")).toHaveStyle({
    //     "border-color": customColors.red,
    //   });
    //   expect(screen.getByText(/I'm red!/i)).toBeInTheDocument(); // usa ER para encontrar a frase sem diferenciar maiúsculas e minúsculas
    // });
  });
});
