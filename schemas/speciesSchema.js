import { gql } from "apollo-server-express";

export default gql`
  type Species {
    id: ID
    speciesName: String
    category: Category
  }

  extend type Mutation {
    addSpecies(speciesName: String, category: ID!): Species
  }
`;
