import { v4 as uuid } from 'uuid';

export default {
  addCategory: (parent, { input }, { categories }) => {
    const newCategory = { id: uuid(), name: input.name }
    categories.push(newCategory);
    return newCategory;
  },
};