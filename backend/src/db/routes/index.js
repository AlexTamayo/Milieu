const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');
// ...other routes

router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
// ...other routes

module.exports = router;
