import Astronomy from '../models/Astronomy.js';

export const getAPODs = async (req, res) => {
  try {
    const models = await Astronomy.find();
    res.json(models);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// rename w/ country
export const getAPOD = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await model.findById(id);

    if (model) {
      return res.json(model);
    }
    res.status(404).json({ message: "Model not found!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createAPOD = async (req, res) => {
  try {
    const model = new model(req.body);
    await model.save();
    res.status(201).json(model);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateAPOD = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await model.findByIdAndUpdate(id, req.body);
    res.status(201).json(model);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteAPOD = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await model.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Model deleted!");
    }

    throw new Error("Model not found");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};