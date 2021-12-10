import filterProduct from '../utilities.mjs';

export default {
  products: ({ id }, { filter }, { products, reviews }) => filterProduct(
    products.filter(p => p.categoryId === id),
    filter,
    reviews,
  ),
};