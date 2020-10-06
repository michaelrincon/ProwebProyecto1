import { Respuesta } from './respuesta';
import { Tema } from './tema';
export class Comentario {
    constructor(public id: number, public fecha: string, public contenido: string, public respuestas: Respuesta[], public rating: number, public temaComentario: Tema, public moderado: boolean, public tipoUsuario: string){}
}
