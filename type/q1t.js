var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (t) {
        this.titulo = t;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.setAutor = function (a) {
        this.autor = a;
    };
    Livro.prototype.getPreco = function () {
        return this.preco;
    };
    Livro.prototype.setPreco = function (p) {
        if (p >= 0) {
            this.preco = p;
        }
        else {
            console.log("ERRO: Valor negativo");
        }
    };
    Livro.prototype.descricao = function () {
        return "\nLivro: ".concat(this.titulo, "\nautor: ").concat(this.autor, "\npre\u00E7o: R$ ").concat(this.preco.toFixed(2), "\n-----------------------------------");
    };
    return Livro;
}());
var livro1 = new Livro("Como fazer um acelerador de partículas com um pedaço de pau e uma fita isolante", "Trojan", 29.99);
var livro2 = new Livro("A Revolução dos Bixos", "George Orwell", 12.99);
var livro3 = new Livro("Boa noite Punpun", "Inio Asano", 45.99);
var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        this.livros = livros;
    }
    Biblioteca.prototype.listar = function () {
        this.livros.forEach(function (livro) {
            console.log(livro.descricao());
        });
    };
    Biblioteca.prototype.Adicionar = function (livro) {
        this.livros.push(livro);
    };
    return Biblioteca;
}());
var lista_livros = [livro1, livro2, livro3];
var biblio = new Biblioteca(lista_livros);
console.log("biblioteca sem o quarto livro");
biblio.listar();
console.log("adicionando o livro");
var livro4 = new Livro("Berserk", "Kentaro Miura", 65.99);
biblio.Adicionar(livro4);
console.log("biblioteca com o livro adicionado");
biblio.listar();
