import filterProduct from '../utilities.mjs';

export default {
  products: (parent, { filter }, { db }) => 
    filterProduct(db.products, filter, db.reviews),
  product: (parent, { id }, { db }) =>
    db.products.find(p => p.id === id),
  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) => 
    db.categories.find(c => c.id === id),
};