import Animal from "../models/animal.js";
import { AuthenticationError } from "apollo-server-express";

export default {
  Query: {
    animals: (parent, args) => {
      return Animal.find();
    },
    animal: (parent, args) => {
      return Animal.findById(args.id);
    },
  },

  Mutation: {
    addAnimal: (parent, args, { user }) => {
      console.log("animalResolver, addAnimal", args, user);
      if (!user) {
        throw new AuthenticationError("you are not authenticated!!");
      }
      const newAnimal = new Animal(args);
      console.log(newAnimal.animalName, `🐒🧟`);
      return newAnimal.save();
    },
    modifyAnimal: (parent, args) => {
      console.log(args);
      const modifiedAnimal = {
        animalName: args.animalName,
        species: args.species,
      };
      return Animal.findByIdAndUpdate(args.id, modifiedAnimal);
    },
  },
};
