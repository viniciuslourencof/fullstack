import express from "express";
import { addJogador, deleteJogador, getJogadores, updateJogador } from "../controllers/jogador.js";

const router = express.Router()

router.get("/jogador", getJogadores)

router.post("/jogador", addJogador)

router.put("/jogador/:id", updateJogador)

router.delete("/jogador/:id", deleteJogador)

export default router