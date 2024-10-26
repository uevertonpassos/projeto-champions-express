import { Router } from "express";
import * as playerControler from "./controllers/player-controllers";
import { verifyToken } from "./auth"; 
import { login } from "./controllers/auth.controller"; 

const router = Router();


router.get('/player', playerControler.getPlayer);
router.get('/player/:id', playerControler.getPlayerById);
router.post('/player', playerControler.postPlayer);
router.delete('/player/:id', playerControler.deletePlayer);
router.patch('/player/:id', playerControler.updatePlayer);


router.post('/login', login); 


router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "Você acessou uma rota protegida!", userId: req.userId });
});

export default router;
