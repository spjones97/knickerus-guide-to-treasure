import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  type: String,
  name: String,
  selectedFile: String,
  armorType: String,
  armorClass: Number,
  charges: Number,
  cost: String,
  damage: String,
  damageType: String,
  description: String,
  difficultyClass: Number,
  duration: String,
  effect: String,
  rarity: String,
  reach: String,
  requiredAlignment: String,
  requiresAttunement: Boolean,
  stealth: String,
  weight: String,
});

const Item = mongoose.model('Item', itemSchema);

export default Item;