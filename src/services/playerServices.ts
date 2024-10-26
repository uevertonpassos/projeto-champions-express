import { playerModel } from "../models/playerModel";
import * as repository from "../repositories/playerRepository"


export const getPlayerAllServices = async ()=>{

    return await repository.findAllPlayers();
}

export const getPlayerByIdServices = async (id: number) =>{
    return await repository.findPlayerById(id)
}

export const addPlayerService = async (player: playerModel) => {

    if(Object.keys(player).length !== 0){

        await repository.setPlayer(player)

        return "Jogdor Criado com Sucesso"
    }else{
        return " Opçõa Inválida: Insira um jogagor "
    }

}

export const deletePlayerService = async (id: number) => {

    let resposta = await repository.deletePlayer(id);

    return resposta;
}

export const updatePlayerService = async (id: number, value: number) => {


    return await repository.updateSpeedPlayer(id, value)

    
}

