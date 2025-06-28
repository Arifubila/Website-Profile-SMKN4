const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const beritaRoutes = require("./routes/beritaRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/berita", beritaRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
