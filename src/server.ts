
import { createApp } from './app'; 
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const app = createApp();


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
                url: 'http://localhost:4000/api', 
            },
        ],
    },
    apis: ['./src/routes.ts'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
