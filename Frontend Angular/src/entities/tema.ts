import { Comentario } from './comentario';

export class Tema {
    // tslint:disable-next-line: max-line-length
    constructor(public id: number, public fechaPublicacion: string, public titulo: string, public contenido: string, public comentarios: Comentario[], public rating: number){}
}
