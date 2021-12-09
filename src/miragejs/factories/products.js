import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import faker from 'faker';

export default {
  product: Factory.extend({
    name() {
      return faker.name.findName();
    },
    price() {
      return faker.datatype.number(10000, 1_000_000);
    },
    imageUrl() {
      return faker.random.image();
    },
    productDetails() {
      return faker.internet.url();
    },
  }),
};
