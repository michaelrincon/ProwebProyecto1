export class Comentario {
    constructor(public fecha: string, public contenido: string, public respuestas: Comentario[], public rating: number){}
}
