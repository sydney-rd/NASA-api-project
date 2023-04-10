// change names...
import Astronomy from '../models/Model.js';

export const getModels = async (req, res) => {
  try {
    const models = await Country.find();
    res.json(models);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// rename w/ country
export const getModel = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await Model.findById(id);

    if (model) {
      return res.json(model);
    }
    res.status(404).json({ message: "Model not found!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createModel = async (req, res) => {
  try {
    const model = new Model(req.body);
    await model.save();
    res.status(201).json(model);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateModel = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await Model.findByIdAndUpdate(id, req.body);
    res.status(201).json(model);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteModel = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Model.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Model deleted!");
    }

    throw new Error("Model not found");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};