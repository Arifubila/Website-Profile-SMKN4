// controllers/galeriController.js
const Galeri = require('../models/Galeri');
const fs = require('fs');
const path = require('path');

exports.getGaleri = async (req, res) => {
  try {
    const galeri = await Galeri.find().sort({ tanggal: -1 });
    res.json(galeri);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data galeri' });
  }
};

exports.uploadGambar = async (req, res) => {
  try {
    const { judul } = req.body;
    const gambar = req.file.filename;

    const newFoto = new Galeri({ judul, gambar });
    await newFoto.save();

    res.status(201).json({ message: 'Gambar berhasil diupload', data: newFoto });
  } catch (err) {
    res.status(500).json({ message: 'Gagal upload gambar' });
  }
};

exports.deleteGambar = async (req, res) => {
  try {
    const data = await Galeri.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Gambar tidak ditemukan' });

    // hapus file dari folder
    const filePath = path.join(__dirname, '../uploads/', data.gambar);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await Galeri.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gambar berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus gambar' });
  }
};
