// models/Guru.js
const mongoose = require("mongoose");

const guruSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    nip: { type: String },
    mapel: { type: String },
    jabatan: { type: String },
    foto: { type: String }, // nama file gambar
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Guru", guruSchema);
