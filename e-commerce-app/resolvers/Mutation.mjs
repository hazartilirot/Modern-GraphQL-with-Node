import { v4 as uuid } from 'uuid';

export default {
  addCategory: (parent, { input }, { db }) =>
    db.categories.push({ id: uuid(), ...input }) && db.categories.at(-1),
  addProduct: (parent, { input }, { db }) =>
    db.products.push({ id: uuid(), ...input }) && db.products.at(-1),
  addReview: (parent, { input }, { db }) =>
    db.reviews.push({ id: uuid(), ...input }) && db.reviews.at(-1),
  deleteCategoryCascading: (parent, { id }, { db }) => {
    db.categories = db.categories.filter(c => c.id !== id);
    const hashTable = {};
    db.products = db.products.filter(p =>
      p.categoryId !== id ? p : (hashTable[p.id] = true) && undefined);
    db.reviews = db.reviews.filter(r => !hashTable.hasOwnProperty(r.productId));

    return true;
  },
  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter(p => p.id !== id);
    db.reviews = db.reviews.filter(r => r.productId !== id);

    return true;
  },
  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter(r => r.id !== id);

    return true;
  },
};