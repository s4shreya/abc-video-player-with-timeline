const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const timelineData = require("./avengers_timeline.json");

const app = express();

// Middleware for handling CORS policy
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://video-player-with-timeline-frontend.vercel.app/",
    ],
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 5555;

// Homepage route
app.get("/", (request, response) => {
  return response.status(234).send(timelineData);
});

// Listens to requests on the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
