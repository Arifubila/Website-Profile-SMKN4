const mongoose = require("mongoose");

const beritaSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true,
    trim: true,
  },
  isi: {
    type: String,
    required: true,
  },
  gambar: {
    type: String, // Nama file gambar (bisa null kalau belum upload)
    default: null,
  },
  tanggal: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Berita", beritaSchema);
