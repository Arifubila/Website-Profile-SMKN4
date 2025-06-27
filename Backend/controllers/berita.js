const Berita = require("../models/Berita");

exports.getAll = async (req, res) => {
  try {
    const data = await Berita.find().sort({ tanggal: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const { judul, isi, gambar } = req.body;
  try {
    const newData = new Berita({ judul, isi, gambar });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await Berita.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await Berita.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await Berita.findByIdAndDelete(req.params.id);
    res.json({ message: "Data berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
