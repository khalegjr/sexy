import { Products } from "./Products";
import { makeServer } from "../../miragejs/server";

const server = makeServer({ environment: "test" });
const products = server.createList("product", 10);
server.shutdown();

export default {
  title: "Products",
  component: Products,
};

const Template = (args) => <Products {...args} />;

export const Default = Template.bind({});

Default.args = {
  products,
};
