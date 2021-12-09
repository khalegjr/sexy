export default function routes() {
  this.timing = 2000;
  this.namespace = 'api';
  this.resource('users');
  this.resource('products');
}
