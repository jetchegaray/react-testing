import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("render posts if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }], //async because response.json() is a promise
    });
    render(<Async></Async>);
    const listItems = await screen.findAllByRole("listitem"); // find return a promise, get not
    expect(listItems).not.toHaveLength(0);
  });
});
