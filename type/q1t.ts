class Livro {
    private titulo: string;
    private autor: string;
    private preco: number;

    constructor(titulo: string, autor: string, preco: number){
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    getTitulo() : string {
        return this.titulo;
    }
    setTitulo(t: string) : void {
        this.titulo = t;
    }
    getAutor() : string {
        return this.autor;
    }
    setAutor(a: string) : void {
        this.autor = a;
    }
    getPreco() : number {
        return this.preco;
    }
    setPreco(p: number) : void {
        if (p >= 0){
            this.preco = p;
        } else {
            console.log("ERRO: Valor negativo")
        }
    }

    descricao() : string {
        return `
Livro: ${this.titulo}
autor: ${this.autor}
preço: R$ ${this.preco.toFixed(2)}
-----------------------------------`
    }
}

let livro1 = new Livro("Como fazer um acelerador de partículas com um pedaço de pau e uma fita isolante","Trojan",29.99)
let livro2 = new Livro("A Revolução dos Bixos","George Orwell",12.99)
let livro3 = new Livro("Boa noite Punpun","Inio Asano",45.99)

class Biblioteca {
    private Livros : string;

    constructor(Livros: string){
        this.Livros = Livros
    }

    Listar(){
        for (let i = 0; i < this.Livros.split(";").length; i++) {
            let livro = this.Livros.split(";")[i]
            console.log((livro).descricao());
          }
    }
}