import db from '../db.mjs';

export default {
  category: ({ categoryId }, args, context) =>
    db.products.find(p => p.categoryId === categoryId)
}