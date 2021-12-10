import { Card } from "./Card";
import { makeServer } from "../../miragejs/server";

const server = makeServer({ environment: "test" });
const product = server.create("product");
server.shutdown();

export default {
  title: "Products/Card",
  component: Card,
};

const Template = (args) => (
  <div className="mx-auto max-w-xl">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  product,
};
