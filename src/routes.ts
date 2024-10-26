import { Router } from "express";
import * as playerControler from "./controllers/player-controllers";

const router = Router();

router.get('/player', playerControler.getPlayer);

router.get('/player/:id', playerControler.getPlayerById);

router.post('/player', playerControler.postPlayer);

router.delete('/player/:id', playerControler.deletePlayer);

router.patch('/player/:id', playerControler.updatePlayer);

export default router