export default {
  category: ({ categoryId }, args, { db }) =>
    db.products.find(p => p.categoryId === categoryId),
  reviews: ({ id }, args, { db }) =>
    db.reviews.filter(r => r.productId === id),
}