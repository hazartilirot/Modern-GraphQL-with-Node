import db from '../db.mjs';

export default {
  products: ({ id }, args, context) => 
    db.products.filter(p => p.categoryId === id)
}