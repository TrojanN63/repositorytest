"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(_nome, _id_user) {
        this._nome = _nome;
        this._id_user = _id_user;
    }
    Object.defineProperty(Usuario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Usuario.prototype.emprestar_item = function (item) {
        console.log("".concat(this.nome, " emprestou => ").concat(item.exibir_info()));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
