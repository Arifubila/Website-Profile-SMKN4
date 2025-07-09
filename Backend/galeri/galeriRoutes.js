// routes/galeriRoutes.js
const express = require("express");
const router = express.Router();
const galeriController = require("../controllers/galeriController");
const upload = require("../middlewares/uploadMiddleware");
const auth = require("../middlewares/authMiddleware"); // optional

router.get("/", galeriController.getGaleri);
router.post("/", auth, upload.single("gambar"), galeriController.uploadGambar);
router.delete("/:id", auth, galeriController.deleteGambar);

module.exports = router;
