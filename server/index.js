/**
 * express framework used here to handle routes, in http requests
 */
const express = require("express");
const app = express();

// allowed server to share the resources for any address (API Call, Specific domain, HTTP requests)
var cors = require("cors");
app.use(cors());

// app.use() is used to handle all http requests, and it is used to introduce middleware in our application
const movieRoutes = require("./routes/movieRoutes");
app.use("/movies", movieRoutes);

// Handle unknown routes
app.use(function(req, res) {
  res.sendStatus(404);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
