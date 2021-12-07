import { makeServer } from "../../miragejs/server";
import { Users } from "./Users";
import { render, screen, waitFor } from "@testing-library/react";

describe("Containers/Users", () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render and display 10 users", async () => {
    server.createList("user", 10);
    render(<Users />);

    await waitFor(() => {
      expect(screen.getAllByTestId("user")).toHaveLength(10);
    });
  });
});
