import * as dotenv from 'dotenv';
import { createApp } from './app';

dotenv.config();
const port = process.env.PORT;

const app = createApp();

app.listen(port, ()=>{
    console.log(`$Servidor iniciado no endereço http://localhost:${port}/`)
})

