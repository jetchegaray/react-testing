import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Suite Greetings", () => {
  test("Hello world rendered ok", () => {
    //arrange
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you'  if the button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!'  if the button was not clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("not renders 'good to see you!'  if the button was not clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
