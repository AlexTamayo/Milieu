const express = require('express');
const router = express.Router();
const { Event } = require('../models');
const getEventsWithDetails = require('../instructions/events/getEventsWithDetails');
const getEventCategories = require('../instructions/events/getEventCategories');
const createEvent = require('../instructions/events/createEvent');

router.get('/', async (req, res) => {
  try {
    const events = await getEventsWithDetails();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/categories', async (req, res) => {
  try {
    const eventCategories = await getEventCategories();
    res.status(200).json(eventCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Get a single event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new event
router.post('/', async (req, res) => {
  try {
    const event = await createEvent(req.body);
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
