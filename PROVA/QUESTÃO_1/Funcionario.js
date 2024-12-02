"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this._nome = nome;
        this._cargo = cargo;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (new_nome) {
            this._nome = new_nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        set: function (new_cargo) {
            this._cargo = new_cargo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.aplicarAumento = function (percentual) {
        if (percentual > 0) {
            this._salario *= 1 + (percentual / 100);
        }
        else {
            console.log("Não é aceito percentual negativo ou nulo.");
        }
    };
    Funcionario.prototype.descricao = function () {
        console.log("Nome: ".concat(this._nome, ", Cargo: ").concat(this._cargo, ", Sal\u00E1rio: R$ ").concat(this._salario.toFixed(2)));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
