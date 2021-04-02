import { gql } from "apollo-server-express";

export default gql`
  type Species {
    id: ID
    speciesName: String
    category: Category
  }
`;
