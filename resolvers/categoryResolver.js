import Category from "../models/category.js";

export default {
  Species: {
    category(parent) {
      console.log(parent);
      return Category.findById(parent.category);
    },
  },

  Mutation: {
    addCategory: (parent, args) => {
      console.log(args);
      const newCategory = new Category(args);
      return newCategory.save();
    },
  },
};
