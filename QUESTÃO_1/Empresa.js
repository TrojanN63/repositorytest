"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, funcionarios) {
        this._nome = nome;
        this._funcionarios = funcionarios;
    }
    Empresa.prototype.adicionarFuncionario = function (funcionario) {
        this._funcionarios.push(funcionario);
    };
    Empresa.prototype.listarFuncionarios = function () {
        this._funcionarios.forEach(function (funcionario) {
            funcionario.descricao();
        });
        console.log("----------------------");
    };
    return Empresa;
}());
exports.Empresa = Empresa;
