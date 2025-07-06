// models/Galeri.js
const mongoose = require("mongoose");

const galeriSchema = new mongoose.Schema({
  judul: { type: String, required: true },
  gambar: { type: String, required: true }, // nama file
  tanggal: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Galeri", galeriSchema);
