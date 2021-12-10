import { getProducts } from "../../miragejs/api/products";
import { Products } from "./Products";

export const productQty = 12;

export default {
  title: "Features/Products",
  component: Products,
};

const Template = (args) => (
  <div className="container mx-auto">
    <Products {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  products: getProducts({ quantity: productQty }),
};
