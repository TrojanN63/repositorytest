"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(titulo, diretor, anoLancamento, avaliacoes) {
        this._avaliacoes = [];
        this._titulo = titulo;
        this._diretor = diretor;
        this._anoLancamento = anoLancamento;
        this._avaliacoes = avaliacoes;
    }
    Object.defineProperty(Filme.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (new_titulo) {
            this._titulo = new_titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "diretor", {
        get: function () {
            return this._diretor;
        },
        set: function (new_diretor) {
            this._diretor = new_diretor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "anoLancamento", {
        get: function () {
            return this._anoLancamento;
        },
        set: function (new_ano) {
            this._anoLancamento = new_ano;
        },
        enumerable: false,
        configurable: true
    });
    Filme.prototype.adicionarAvaliacao = function (avaliacao) {
        if (avaliacao <= 5) {
            if (avaliacao >= 1) {
                this._avaliacoes.push(avaliacao);
            }
        }
    };
    Filme.prototype.calcularMediaAvaliacoes = function () {
        var n = 0;
        var a = 0;
        this._avaliacoes.forEach(function (av) {
            n++;
            a += av;
        });
        return (a / n);
    };
    return Filme;
}());
exports.Filme = Filme;
