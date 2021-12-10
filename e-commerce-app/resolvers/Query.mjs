export default {
  products: (parent, args, { products }) => products,
  product: (parent, { id }, { products }) =>
    products.find(p => p.id === id),
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find(c => c.id === id)
}