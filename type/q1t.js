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
        this.preco = p;
    };
    Livro.prototype.descricao = function () {
        return "\nLivro: ".concat(this.titulo, "\nautor: ").concat(this.autor, "\npre\u00E7o: R$ ").concat(this.preco.toFixed(2), "\n-----------------------------------");
    };
    return Livro;
}());
var livro1 = new Livro("Como fazer um acelerador de partículas com um pedaço de pau e uma fita isolante", "Trojan", 29.9);
console.log(livro1.descricao());
livro1.setTitulo("Montando um colisor em casa");
livro1.setAutor("Arthur");
livro1.setPreco(15.99);
console.log(livro1.descricao());
