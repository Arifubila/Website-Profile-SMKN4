// routes/jurusanRoutes.js
const express = require("express");
const router = express.Router();
const jurusanController = require("../controllers/jurusanController");
const auth = require("../middlewares/authMiddleware"); // jika ingin proteksi

router.get("/", jurusanController.getAllJurusan);
router.get("/:id", jurusanController.getJurusanById);
router.post("/", auth, jurusanController.createJurusan);
router.put("/:id", auth, jurusanController.updateJurusan);
router.delete("/:id", auth, jurusanController.deleteJurusan);

module.exports = router;
