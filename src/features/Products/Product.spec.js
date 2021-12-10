import { makeServer } from "../../miragejs/server";

describe("Containers/Products", () => {
  let server;

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render", () => {
    const products = server.createList("product", 10);
    console.log(JSON.parse(JSON.stringify(products)));
  });
});
