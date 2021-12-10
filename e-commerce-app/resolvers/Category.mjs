export default {
  products: ({ id }, args, { products }) => 
    products.filter(p => p.categoryId === id)
}