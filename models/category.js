import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: String,
});

export default mongoose.model("Category", categorySchema);
