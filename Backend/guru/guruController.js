// controllers/guruController.js
const Guru = require('../models/Guru');
const fs = require('fs');
const path = require('path');

// GET semua guru
exports.getGuru = async (req, res) => {
  try {
    const data = await Guru.find().sort({ nama: 1 });
    res.json(data);
  } catch {
    res.status(500).json({ message: 'Gagal mengambil data guru' });
  }
};

// GET guru by ID
exports.getGuruById = async (req, res) => {
  try {
    const guru = await Guru.findById(req.params.id);
    if (!guru) return res.status(404).json({ message: 'Guru tidak ditemukan' });
    res.json(guru);
  } catch {
    res.status(500).json({ message: 'Gagal mengambil data guru' });
  }
};

// POST tambah guru
exports.createGuru = async (req, res) => {
  try {
    const { nama, nip, mapel, jabatan } = req.body;
    const foto = req.file ? req.file.filename : '';
    const guru = new Guru({ nama, nip, mapel, jabatan, foto });
    await guru.save();
    res.status(201).json(guru);
  } catch {
    res.status(500).json({ message: 'Gagal menambahkan data guru' });
  }
};

// PUT update guru
exports.updateGuru = async (req, res) => {
  try {
    const guru = await Guru.findById(req.params.id);
    if (!guru) return res.status(404).json({ message: 'Guru tidak ditemukan' });

    if (req.file && guru.foto) {
      const filePath = path.join(__dirname, '../uploads/', guru.foto);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    guru.nama = req.body.nama || guru.nama;
    guru.nip = req.body.nip || guru.nip;
    guru.mapel = req.body.mapel || guru.mapel;
    guru.jabatan = req.body.jabatan || guru.jabatan;
    if (req.file) guru.foto = req.file.filename;

    await guru.save();
    res.json(guru);
  } catch {
    res.status(500).json({ message: 'Gagal mengupdate data guru' });
  }
};

// DELETE guru
exports.deleteGuru = async (req, res) => {
  try {
    const guru = await Guru.findById(req.params.id);
    if (!guru) return res.status(404).json({ message: 'Guru tidak ditemukan' });

    if (guru.foto) {
      const filePath = path.join(__dirname, '../uploads/', guru.foto);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await Guru.findByIdAndDelete(req.params.id);
    res.json({ message: 'Guru berhasil dihapus' });
  } catch {
    res.status(500).json({ message: 'Gagal menghapus data guru' });
  }
};
