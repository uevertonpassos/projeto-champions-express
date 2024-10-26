import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Champions',
            version: '1.0.0',
            description: 'Documentação da API Champions',
        },
        servers: [
            {
                url: 'http://localhost:3000/api', // Altere para a URL do seu servidor
            },
        ],
    },
    apis: ['./src/routes.ts'], // Caminho para seus arquivos de rota
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
