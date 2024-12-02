"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.itensDisponiveis = [];
        this.usuarios = [];
    }
    Biblioteca.prototype.adicionar_item = function (item) {
        this.itensDisponiveis.push(item);
        console.log("Item adicionado => ".concat(item.exibir_info()));
    };
    Biblioteca.prototype.registrar_usuario = function (user) {
        this.usuarios.push(user);
        console.log("Usu\u00E1rio Registrado => ".concat(user.nome));
    };
    Biblioteca.prototype.emprestar_item = function (user, item) {
        console.log("Item ".concat(item.exibir_info(), " emprestado para ").concat(user.nome));
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
