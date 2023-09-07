const express = require("express");
const router = express.Router();
const { User } = require("../models");
const jwt = require('jsonwebtoken');
const secret = "fmERAnC8SZqAn8uPdgES";
const getAllUserData = require('../instructions/users/getAllUserData');

const addUser = require("../instructions/users/createUser");
const loginUser = require('../instructions/users/loginUser');
const findUserByEmail = require('../instructions/users/findUserByEmail');
const findUserByUsername = require('../instructions/users/findUserByUsername');

/* CREATE USER */
router.post("/", async (req, res) => {
  console.log("POST /api/users route hit"); // Logging to know the route has been hit
  try {
    const newUser = await addUser(req.body);
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      throw new Error("Unable to create user");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* GET ALL USERS */
router.get("/", async (req, res) => {
  console.log("GET /api/users route hit"); // Logging to know the route has been hit
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* LOGIN POST */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("GET /api/users/login route hit");
  try {
    const { token, user } = await loginUser(email, password);
    if (token) {
        res.status(200).json({ token, userId: user.id });
    } else {
        res.status(401).json({ message: "Authentication failed." });
    }
  } catch (error) {
      res.status(500).json({ message: "An error occurred.", error: error.message });
  }
});

/* TOKEN VALIDATION */
router.post("/validate-token", async (req, res) => {

  console.log("GET /api/users/validate-token route hit");

  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error during token validation:", error.message);

    res.status(401).json({ message: "Invalid or expired token" });
  }
});

/* GET USER BY ID */
router.get("/:id", async (req, res) => {
  console.log(`GET /api/users/${req.params.id} route hit`); // Logging to know the route has been hit
  try {
    const user = await getAllUserData(req.params.id);
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

// Get a user by email
router.get("/email/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await findUserByEmail(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a user by username
router.get("/username/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await findUserByUsername(username);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
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
