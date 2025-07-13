// routes/guruRoutes.js
const express = require("express");
const router = express.Router();
const guruController = require("../controllers/guruController");
const upload = require("../middlewares/uploadMiddleware");
const auth = require("../middlewares/authMiddleware"); // kalau pakai proteksi login

router.get("/", guruController.getGuru);
router.get("/:id", guruController.getGuruById);
router.post("/", auth, upload.single("foto"), guruController.createGuru);
router.put("/:id", auth, upload.single("foto"), guruController.updateGuru);
router.delete("/:id", auth, guruController.deleteGuru);

module.exports = router;
