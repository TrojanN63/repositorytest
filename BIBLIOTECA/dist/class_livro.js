import { ItemBiblioteca } from "./abstract_item.js";
export class Livro extends ItemBiblioteca {
    constructor(titulo, anoPublicado, autor, numero_paginas) {
        super(titulo, anoPublicado);
        this.autor = autor;
        this.numero_paginas = numero_paginas;
    }
    exibir_info() {
        return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano_publicado}, Páginas: ${this.numero_paginas}`;
    }
}
