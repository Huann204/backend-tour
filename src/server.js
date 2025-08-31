const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const tourRoutes = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();
// Routes

app.use("/api/tours", tourRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/bookings", bookingRoutes);

const path = require("path");
// Cho phép truy cập ảnh trong folder img
app.use("/img", express.static(path.join(__dirname, "../img")));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
