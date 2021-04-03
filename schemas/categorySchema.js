import { gql } from "apollo-server-express";

export default gql`
  type Category {
    id: ID
    categoryName: String
  }

  extend type Mutation {
    addCategory(categoryName: String): Category
  }
`;
