const animalData = [
  {
    id: "1",
    animalName: "Frank",
    species: "1",
  },
];

/*const speciesData = [
  {
    id: "1",
    speciesName: "Cat",
    category: "1",
  },
];

const categoryData = [
  {
    id: "1",
    categoryName: "Mammal",
  },
];
*/

export default {
  Query: {
    animals: (parent, args) => {
      return animalData;
    },
  },
};
