// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const jurusanRoutes = require('./routes/jurusanRoutes');
app.use('/api/jurusan', jurusanRoutes);

const galeriRoutes = require('./routes/galeriRoutes');
app.use('/api/galeri', galeriRoutes);
app.use('/uploads', express.static('uploads')); // supaya bisa akses gambar dari URL

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error("DB connection error:", err));
