import filterProduct from '../utilities.mjs';

export default {
  products: (parent, { filter }, { products, reviews }) => 
    filterProduct(products, filter, reviews),
  product: (parent, { id }, { products }) =>
    products.find(p => p.id === id),
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find(c => c.id === id),
};