import express from "express";
import { addEquipe, deleteEquipe, getEquipes, updateEquipe } from "../controllers/equipe.js";

const router = express.Router()

router.get("/equipe", getEquipes)

router.post("/equipe", addEquipe)

router.put("/equipe/:id", updateEquipe)

router.delete("/equipe/:id", deleteEquipe)

export default router