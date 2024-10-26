import  {Request, Response} from 'express';
import * as services from '../services/playerServices';

export const getPlayer = async (req:Request, res:Response) =>{

        const data = await services.getPlayerAllServices()

        res.json(data)
}

export const getPlayerById = async (req:Request, res:Response) =>{

        let id = parseInt(req.params.id)
        const data = await services.getPlayerByIdServices(id)

        res.json(data)

};

export const postPlayer = async (req:Request, res:Response) => {

        let bodyValue = req.body

        let setData = await services.addPlayerService(bodyValue);
        
        res.send(setData);
}

export const deletePlayer = async (req: Request, res: Response) => {

        let id = parseInt(req.params.id);


        res.send(await services.deletePlayerService(id))
}

export const updatePlayer = async (req: Request, res: Response) => {

        let id = parseInt(req.params.id);
        let bodyValue = req.body

        res.send(await services.updatePlayerService(id, bodyValue.velocidade))
}