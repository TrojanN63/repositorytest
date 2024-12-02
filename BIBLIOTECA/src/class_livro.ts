import { ItemBiblioteca } from "./abstract_item";

export class Livro extends ItemBiblioteca{
    constructor(
        titulo : string,
        anoPublicado : number,
        private autor: string,
        private numero_paginas : number
    ){
        super(titulo,anoPublicado);
    }
    exibir_info(): string {
        return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano_publicado}, Páginas: ${this.numero_paginas}`;
    }
}