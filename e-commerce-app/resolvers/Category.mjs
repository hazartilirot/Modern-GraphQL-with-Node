import filterProduct from '../utilities.mjs';

export default {
  products: ({ id }, { filter }, { db }) => filterProduct(
    db.products.filter(p => p.categoryId === id),
    filter,
    db.reviews,
  ),
};