// models/Jurusan.js
const mongoose = require("mongoose");

const jurusanSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    gambar: {
      type: String, // nama file atau URL
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Jurusan", jurusanSchema);
