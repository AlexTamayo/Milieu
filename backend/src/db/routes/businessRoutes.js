const express = require('express');
const router = express.Router();
const { Business } = require('../models');
const getBusinessesWithDetails = require('../instructions/businesses/getBusinessesWithDetails');
const getBusinessCategories = require('../instructions/businesses/getBusinessCategories');
const createBusiness = require('../instructions/businesses/createBusiness');
const findBusinessesByUser = require('../instructions/businesses/findBusinessesByUser');

router.get('/', async (req, res) => {
  try {
    const businesses = await getBusinessesWithDetails();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const businessCategories = await getBusinessCategories();
    res.status(200).json(businessCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const businesses = await findBusinessesByUser(id);
    if (businesses) {
      res.status(200).json(businesses);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single business by ID
router.get('/:id', async (req, res) => {
  try {
    const business = await Business.findByPk(req.params.id);
    if (business) {
      res.status(200).json(business);
    } else {
      res.status(404).json({ error: 'Business not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new business
router.post('/', async (req, res) => {
  try {
    console.log('here in the router ' + req.body);
    const business = await createBusiness(req.body);
    res.status(201).json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a business by ID
router.put('/:id', async (req, res) => {
  try {
    const business = await Business.findByPk(req.params.id);
    if (business) {
      await business.update(req.body);
      res.status(200).json(business);
    } else {
      res.status(404).json({ error: 'Business not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a business by ID
router.delete('/:id', async (req, res) => {
  try {
    const business = await Business.findByPk(req.params.id);
    if (business) {
      await business.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Business not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
