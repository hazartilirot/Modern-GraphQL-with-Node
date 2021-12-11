import { v4 as uuid } from 'uuid';

export default {
  addCategory: (parent, { input }, { categories }) =>
    categories.push({ id: uuid(), ...input }) && categories.at(-1),
  addProduct: (parent, { input }, { products }) => 
    products.push({ id: uuid(), ...input }) && products.at(-1),
  addReview: (parent, { input }, { reviews }) => 
    reviews.push({ id: uuid(), ...input }) && reviews.at(-1),
};