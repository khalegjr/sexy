import { Products } from "./Products";
import { makeServer } from "../../miragejs/server";

export const productQty = 12;

const server = makeServer({ environment: "test" });
const products = server.createList("product", productQty);
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
