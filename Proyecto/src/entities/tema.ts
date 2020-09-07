import { Comentario } from './comentario';

export class Tema {
    fecha_publicacion : String;
    titulo : String;
    contenido : String;
    comentarios : Comentario [];
}
