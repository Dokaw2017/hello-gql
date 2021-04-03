import Animal from "../models/animal.js";

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
    addAnimal: (parent, args) => {
      console.log(args);
      const newAnimal = new Animal(args);
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
