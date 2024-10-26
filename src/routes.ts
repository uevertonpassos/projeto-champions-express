import { Router } from "express";
import * as playerController from "./controllers/player-controllers";
import { verifyToken } from "./auth"; 
import { login } from "./controllers/auth.controller"; 

const router = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login de usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: user1
 *               password:
 *                 type: string
 *                 example: password1
 *     responses:
 *       200:
 *         description: Retorna o token de autenticação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Usuário ou senha inválidos
 */

/**
 * @swagger
 * /player:
 *   get:
 *     summary: Obtém todos os jogadores
 *     tags: [Player]
 *     responses:
 *       200:
 *         description: Lista de jogadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   username:
 *                     type: string
 *                     example: user1
 *                   team:
 *                     type: string
 *                     example: time1
 */

/**
 * @swagger
 * /player/{id}:
 *   get:
 *     summary: Obtém um jogador pelo ID
 *     tags: [Player]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do jogador
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes do jogador
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: user1
 *                 team:
 *                   type: string
 *                   example: time1
 *       404:
 *         description: Jogador não encontrado
 */

/**
 * @swagger
 * /player:
 *   post:
 *     summary: Adiciona um novo jogador
 *     tags: [Player]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: user1
 *               team:
 *                 type: string
 *                 example: time1
 *     responses:
 *       201:
 *         description: Jogador criado com sucesso
 */

/**
 * @swagger
 * /player/{id}:
 *   delete:
 *     summary: Remove um jogador pelo ID
 *     tags: [Player]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do jogador
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Jogador removido com sucesso
 *       404:
 *         description: Jogador não encontrado
 */

/**
 * @swagger
 * /player/{id}:
 *   patch:
 *     summary: Atualiza um jogador pelo ID
 *     tags: [Player]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do jogador
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: user2
 *               team:
 *                 type: string
 *                 example: time2
 *     responses:
 *       200:
 *         description: Jogador atualizado com sucesso
 *       404:
 *         description: Jogador não encontrado
 */

// Rota protegida
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "Você acessou uma rota protegida!", userId: req.userId });
});

// Adicionando as rotas
router.get('/player', playerController.getPlayer);
router.get('/player/:id', playerController.getPlayerById);
router.post('/player', playerController.postPlayer);
router.delete('/player/:id', playerController.deletePlayer);
router.patch('/player/:id', playerController.updatePlayer);

router.post('/login', login);

export default router;
