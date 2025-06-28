// controllers/authController.js
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin)
      return res.status(400).json({ message: "Username sudah terdaftar" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: "Admin berhasil didaftarkan" });
  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan saat register" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin)
      return res.status(404).json({ message: "Admin tidak ditemukan" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Password salah" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token, username: admin.username });
  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan saat login" });
  }
};
