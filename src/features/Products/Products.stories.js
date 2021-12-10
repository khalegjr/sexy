import { getProducts } from "../../miragejs/api/products";
import { Products } from "./Products";

export const productQty = 12;

export default {
  title: "Products",
  component: Products,
};

const Template = (args) => <Products {...args} />;

export const Default = Template.bind({});

Default.args = {
  products: getProducts({ quantity: productQty }),
};
