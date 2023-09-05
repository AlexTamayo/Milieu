const express = require("express");
const router = express.Router();
const { User } = require("../models");

// Create a new user
router.post("/", async (req, res) => {
  console.log("POST /api/users route hit"); // Logging to know the route has been hit
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  console.log("GET /api/users route hit"); // Logging to know the route has been hit
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/test/:id", async (req, res) => {
  console.log(`GET /api/users/test/${req.params.id} route hit`); // Logging to know the route has been hit
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      console.log("User found:", user);
      res.status(200).json(user);
    } else {
      console.log("User not found");
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log("An error occurred:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  console.log(`GET /api/users/${req.params.id} route hit`); // Logging to know the route has been hit
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      console.log("User found:", user); // Log the found user
      res.status(200).json(user);
    } else {
      console.log("User not found"); // Log when a user is not found
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log("An error occurred:", error.message); // Log any error that occurs
    res.status(400).json({ error: error.message });
  }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
  console.log(`PUT /api/users/${req.params.id} route hit`); // Logging to know the route has been hit
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  console.log(`DELETE /api/users/${req.params.id} route hit`); // Logging to know the route has been hit
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
