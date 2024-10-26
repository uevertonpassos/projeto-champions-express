import { playerModel } from "../models/playerModel";


const dataBase: playerModel[] = [
    { "id": 1, "name": "Ronaldo", "velocidade": 91, "chute": 93, "passe": 82, "drible": 88, "defesa": 35, "físico": 75, "clube": "Al-Nassr" },
    { "id": 2, "name": "Messi batata", "velocidade": 85, "chute": 92, "passe": 91, "drible": 95, "defesa": 34, "físico": 65, "clube": "Inter Miami" },
    { "id": 3, "name": "Kylian Mbappé", "velocidade": 97, "chute": 89, "passe": 80, "drible": 92, "defesa": 39, "físico": 77, "clube": "Paris Saint-Germain" },
    { "id": 4, "name": "Kevin De Bruy", "velocidade": 74, "chute": 86, "passe": 93, "drible": 87, "defesa": 64, "físico": 78, "clube": "Manchester City" },
    { "id": 5, "name": "Robert Lewandowski", "velocidade": 75, "chute": 91, "passe": 79, "drible": 86, "defesa": 44, "físico": 82, "clube": "Barcelona" },
    { "id": 6, "name": "Neymar Jr.", "velocidade": 91, "chute": 85, "passe": 83, "drible": 94, "defesa": 32, "físico": 58, "clube": "Al-Hilal" },
    { "id": 7, "name": "Mohamed Salah", "velocidade": 93, "chute": 89, "passe": 81, "drible": 90, "defesa": 45, "físico": 75, "clube": "Liverpool" },
    { "id": 8, "name": "Virgil van Dijk", "velocidade": 67, "chute": 60, "passe": 71, "drible": 72, "defesa": 91, "físico": 86, "clube": "Liverpool" },
    { "id": 9, "name": "Joshua Kimmich", "velocidade": 70, "chute": 72, "passe": 86, "drible": 82, "defesa": 85, "físico": 80, "clube": "Bayern de Munique" },
    { "id": 10, "name": "Jan Oblak", "velocidade": 50, "chute": 30, "passe": 45, "drible": 42, "defesa": 91, "físico": 75, "clube": "Atlético de Madrid" }
]



export async function findAllPlayers(): Promise<playerModel[]> {

    return dataBase

};

export async function findPlayerById(id: number): Promise<playerModel[] | undefined> {

    return dataBase.filter( player => id === player.id);
}

export async function setPlayer(player: playerModel){
    dataBase.push(player)
}

export async function deletePlayer(id: number){
    const index = dataBase.findIndex((p) => p.id === id)
    
    if (index !== -1){
        dataBase.splice(index, 1);
        return "Jogador deletado com sucesso!"
    }else{
        return "Jogador inexistente!"
    }

}

export async function updateSpeedPlayer(id: number, NovoValue: number){

    let index =  dataBase.findIndex( player => player.id === id);

    if (index !==  -1){

        dataBase[index].velocidade = NovoValue

        return "Speed alterado com sucesso!"
    }else{
        return "Jogador Inexistente!"
    }

}