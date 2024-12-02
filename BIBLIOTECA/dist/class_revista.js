import { ItemBiblioteca } from "./abstract_item.js";
export class Revista extends ItemBiblioteca {
    constructor(titulo, anoPublicado, editora, numeroEdicao) {
        super(titulo, anoPublicado);
        this.editora = editora;
        this.numeroEdicao = numeroEdicao;
    }
    exibir_info() {
        return `Revista: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.ano_publicado}, Edição: ${this.numeroEdicao}`;
    }
}
