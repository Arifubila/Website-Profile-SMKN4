// controllers/jurusanController.js
const Jurusan = require("../models/Jurusan");

// Get all jurusan
exports.getAllJurusan = async (req, res) => {
  try {
    const data = await Jurusan.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data jurusan" });
  }
};

// Get by ID
exports.getJurusanById = async (req, res) => {
  try {
    const jurusan = await Jurusan.findById(req.params.id);
    if (!jurusan)
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    res.json(jurusan);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data" });
  }
};

// Tambah jurusan
exports.createJurusan = async (req, res) => {
  try {
    const { nama, deskripsi, gambar } = req.body;
    const jurusan = new Jurusan({ nama, deskripsi, gambar });
    await jurusan.save();
    res.status(201).json(jurusan);
  } catch (err) {
    res.status(500).json({ message: "Gagal menambahkan jurusan" });
  }
};

// Update jurusan
exports.updateJurusan = async (req, res) => {
  try {
    const { nama, deskripsi, gambar } = req.body;
    const updated = await Jurusan.findByIdAndUpdate(
      req.params.id,
      { nama, deskripsi, gambar },
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengubah data jurusan" });
  }
};

// Hapus jurusan
exports.deleteJurusan = async (req, res) => {
  try {
    const deleted = await Jurusan.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    res.json({ message: "Jurusan berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: "Gagal menghapus jurusan" });
  }
};
