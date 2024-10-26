import { Request, Response } from "express";
import { generateToken } from "../auth"; 


const users = [
    { id: 1, username: "user1", password: "password1" }, 
    { id: 2, username: "user2", password: "password2" }  
];

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

   
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: "Usuário ou senha inválidos" });
    }

    const token = generateToken(user); 

    res.json({ token }); 
};
