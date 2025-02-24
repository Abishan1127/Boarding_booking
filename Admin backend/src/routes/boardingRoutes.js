const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { getBoardingDetails, uploadBoardingImage } = require("../controllers/boardingController");

router.get("/", getBoardingDetails);
router.post("/upload", upload.single("board_image"), uploadBoardingImage);

module.exports = router;
