const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./db/routes/userRoutes"); // Import userRoutes module
const businessRoutes = require("./db/routes/businessRoutes"); // Import businessRoutes
const eventRoutes = require("./db/routes/eventRoutes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the imported route modules
app.use("/api/users", userRoutes);
app.use("/api/businesses", businessRoutes);
app.use("/api/events",eventRoutes);


// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
