const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");

dotenv.config();        // Load environment variables
connectDB();            // Connect MongoDB

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
