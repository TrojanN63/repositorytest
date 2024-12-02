import { ItemBiblioteca } from "./abstract_item.js";

export class Revista extends ItemBiblioteca{
    constructor(
        titulo : string,
        anoPublicado : number,
        private editora: string,
        private numeroEdicao : number
    ){
        super(titulo,anoPublicado)
    }

    exibir_info(): string {
        return `Revista: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.ano_publicado}, Edição: ${this.numeroEdicao}`;
    }
}