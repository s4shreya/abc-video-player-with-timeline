const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const timelineData = require("./avengers_timeline.json");

const app = express();

// Middleware for handling CORS policy
app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 5555;

// Homepage route
app.get("/", (request, response) => {
  response.send(timelineData);
});

// Listens to requests on the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
