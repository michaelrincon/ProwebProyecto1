import { Respuesta } from './respuesta';
export class Comentario {
    constructor(public id: number, public fecha: string, public contenido: string, public respuestas: Respuesta[], public rating: number){}
}
