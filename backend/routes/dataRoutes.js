// server/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Route to create new data
router.post('/', async (req, res) => {
  try {
    const newData = req.body;
    const createdData = await Data.create(newData);
    res.status(201).json(createdData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update existing data
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedData = await Data.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all data
router.get('/', async (req, res) => {
  try {
    const allData = await Data.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get data by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findById(id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete data by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await Data.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
