import express from "express";
import { getUniversities, createUniversity, deleteUniversity } from "../controllers/universityController.js";

const router = express.Router();

router.get("/universities", getUniversities);
router.post("/universities", createUniversity);
router.delete("/universities/:id", deleteUniversity);

export default router;
