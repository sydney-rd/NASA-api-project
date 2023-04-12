import Astronomy from '../models/Astronomy.js';

// change models to spaceitem etc..
export const getAPODs = async (req, res) => {
  try {
    const astronomyImgs = await Astronomy.find();
    res.json(astronomyImgs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getAPOD = async (req, res) => {
  try {
    const { id } = req.params;
    const astronomyImg = await Astronomy.findById(id);
    if (astronomyImg) {
      return res.json(astronomyImg);
    }
    res.status(404).json({ message: "Model not found!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAPODByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const astronomyImg = await Astronomy.findOne({date});
    if (!astronomyImg) {
      return res.status(404).json({ message: "Date not found!" })
    }  
    res.json(astronomyImg);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
}

export const createAPOD = async (req, res) => {
  try {
    const astronomyImg = new Astronomy(req.body);
    // console.log(req.body)
    await astronomyImg.save();
    res.status(201).json(astronomyImg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateAPOD = async (req, res) => {
  try {
    const { id } = req.params;
    const astronomyImg = await Astronomy.findByIdAndUpdate(id, req.body);
    res.status(201).json(astronomyImg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteAPOD = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Astronomy.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Model deleted!");
    }

    throw new Error("Model not found");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};