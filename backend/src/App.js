const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./db/routes");
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Integrate the routes
app.use('/api', routes); // Assuming your routes are defined in the "routes" module

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
