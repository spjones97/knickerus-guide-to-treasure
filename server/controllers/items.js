import Item from "../models/item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();

    console.log(items);

    res.status(200).json(items);
  } catch (error) {
    
  }
};

export const createItem = async (req, res) => {
  const item = req.body;

  const newItem = new Item(item);
  
  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};