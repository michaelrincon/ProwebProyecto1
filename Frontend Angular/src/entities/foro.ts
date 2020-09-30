import { Tema } from './tema';

export class Foro {
    constructor(public id: number, public nombre: string, public temas: Tema[], public moderado: boolean){}
}
