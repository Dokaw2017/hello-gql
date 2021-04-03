import Species from "../models/species.js";

export default {
  Animal: {
    species(parent) {
      console.log(parent);
      return Species.findById(parent.species);
    },
  },

  Mutation: {
    addSpecies: (parent, args) => {
      console.log(args);
      const newSpecies = new Species(args);
      return newSpecies.save();
    },
  },
};
