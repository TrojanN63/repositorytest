"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
var Catalogo = /** @class */ (function () {
    function Catalogo(filmes) {
        this._filmes = [];
        this._filmes = filmes;
    }
    Catalogo.prototype.adicionarFilme = function (filme) {
        this._filmes.push(filme);
    };
    Catalogo.prototype.listarFilmes = function () {
        this._filmes.forEach(function (filme) {
            console.log("".concat(filme.titulo, ", ").concat(filme.diretor, ", ").concat(filme.anoLancamento, ", Avalia\u00E7\u00E3o M\u00E9dia: ").concat(filme.calcularMediaAvaliacoes()));
        });
    };
    Object.defineProperty(Catalogo.prototype, "filmes", {
        get: function () {
            return this._filmes;
        },
        enumerable: false,
        configurable: true
    });
    return Catalogo;
}());
exports.Catalogo = Catalogo;
