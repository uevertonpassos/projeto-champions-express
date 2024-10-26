import  express, {json} from 'express';
import router from './routes';
import cors from 'cors'

export function createApp(){

    const app = express();

    app.use(json())
    app.use("/api", router)
    app.use(cors())

    return app
}