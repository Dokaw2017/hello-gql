import mongoose from "mongoose";

const Schema = mongoose.Schema;

const animalSchema = new Schema({
  animalName: String,
  species: { type: mongoose.Types.ObjectId, ref: "Species" },
});

export default mongoose.model("Animal", animalSchema);
