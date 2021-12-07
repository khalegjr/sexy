export default function routes() {
  this.timing = 3000;
  this.namespace = 'api';
  this.resource('users');
  this.resource('products');
}
