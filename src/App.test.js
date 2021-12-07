import { makeServer } from "./miragejs/server";

describe("App", () => {
  let server;

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  test("App", () => {
    const users = server.createList("user", 3);

    console.log(users);
  });
});
