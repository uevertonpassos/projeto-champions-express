// src/app.ts

import express, { json } from 'express';
import router from './routes';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

export function createApp() {
    const app = express();

    // Configuração do Swagger
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'API Champions',
                version: '1.0.0',
                description: 'Documentação da API Champions',
            },
            servers: [
                {
                    url: 'http://localhost:3000', // URL base do servidor
                },
            ],
        },
        apis: ['./dist/routes.js'], // Caminho para o arquivo de rotas compilado
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    // Middleware
    app.use(cors());
    app.use(json());

    // Adiciona o prefixo /api para as rotas
    app.use("/api", router); 

    return app;
}
