export default {
  category: ({ categoryId }, args, { products }) =>
    products.find(p => p.categoryId === categoryId),
  reviews: ({ id }, args, { reviews }) =>
    reviews.filter(r => r.productId === id),
}