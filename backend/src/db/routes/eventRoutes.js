const express = require('express');
const router = express.Router();
const { Event } = require('../models');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// // Get a single event by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const event = await Event.findByPk(req.params.id);
//     if (event) {
//       res.status(200).json(event);
//     } else {
//       res.status(404).json({ error: 'Event not found' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Create a new event
router.post('/', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an event by ID
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      await event.update(req.body);
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an event by ID
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      await event.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
