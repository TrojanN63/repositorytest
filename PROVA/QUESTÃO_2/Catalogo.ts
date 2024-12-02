import { Filme } from "./Filme"

export class Catalogo{
    private _filmes : Filme[] = []
    constructor(filmes : Filme[]){
        this._filmes = filmes
    }

    adicionarFilme(filme : Filme) : void{
        this._filmes.push(filme);
    }
    listarFilmes() : void{
        this._filmes.forEach(filme => {
            console.log(`${filme.titulo}, ${filme.diretor}, ${filme.anoLancamento}, Avaliação Média: ${filme.calcularMediaAvaliacoes()}`)
        });
    }
    get filmes() : Filme[]{
        return this._filmes
    }
}