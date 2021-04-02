import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    animals: [Animal]
  }

  type Animal {
    id: ID
    animalName: String
    species: Species
  }
`;
