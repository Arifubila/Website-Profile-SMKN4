// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Format: Bearer <token>
  if (!token) return res.status(401).json({ message: "Token tidak ditemukan" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Token tidak valid" });
  }
};

module.exports = auth;
