const express = require("express");
const router = express.Router();
const beritaCtrl = require("../controllers/berita");

router.get("/", beritaCtrl.getAll);
router.post("/", beritaCtrl.create);
router.get("/:id", beritaCtrl.getById);
router.put("/:id", beritaCtrl.update);
router.delete("/:id", beritaCtrl.remove);

module.exports = router;
