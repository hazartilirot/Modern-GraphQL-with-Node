import db from '../db.mjs';

export default {
  products: () => db.products,
  product: (parent, { id }, context) =>
    db.products.find(p => p.id === id),
  categories: () => db.categories,
  category: (parent, { id }, context) =>
    db.categories.find(c => c.id === id)
}