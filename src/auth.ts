import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface User {
    id: number;
    username: string;
}

// gera um token JWT
export const generateToken = (user: User): string => {
    return jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET as string, 
        { expiresIn: '1h' }
    );
};

// função de  login
export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    
    if (username === "test" && password === "password") {
        const user = { id: 1, username: username }; 
        const token = generateToken(user);
        return res.json({ token });
    }

    return res.status(401).json({ message: "Usuário ou senha inválidos" });
};

// middleware para verificar o token
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Falha na autenticação do token' });
        }
        req.userId = (decoded as { id: number }).id; 
        next();
    });
};
