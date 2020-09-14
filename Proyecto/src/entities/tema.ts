import { Comentario } from './comentario';

export class Tema {
    fechaPublicacion: string;
    titulo: string;
    contenido: string;
    comentarios: Comentario [];
}
