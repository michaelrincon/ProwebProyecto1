import { Comentario } from './comentario';
export class Respuesta {
    constructor(public id: number, public fecha: string, public contenido: string, public rating: number, public comentarioRespuesta: Comentario){}
}
