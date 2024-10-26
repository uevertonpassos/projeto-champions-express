import express, { json } from 'express';
import router from './routes'; 
import cors from 'cors';
import dotenv from 'dotenv'; 


dotenv.config();

export function createApp() {
    const app = express();

    app.use(cors());
    app.use(json());
    app.use("/api", router); 

    return app;
}
