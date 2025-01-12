const express = require("express");
const router = express.Router();

const vocabulariesController = require("../App/controller/vocabulariesController");

// Tạo một từ vựng mới
router.post("/create", vocabulariesController.createVocabulary);

// Cập nhật một từ vựng
router.put("/update/:id", vocabulariesController.updateVocabulary);

// Xóa một từ vựng
router.delete("/delete/:id", vocabulariesController.deleteVocabulary);

// Lấy danh sách tất cả từ vựng
router.get("/get-all", vocabulariesController.getAllVocabularies);

// Lấy thông tin chi tiết của một từ vựng
router.get("/get/:id", vocabulariesController.getVocabularyById);

router.post("/get-random", vocabulariesController.getRandomVocabularies);

module.exports = router;
