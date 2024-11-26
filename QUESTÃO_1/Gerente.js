"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var Funcionario_1 = require("./Funcionario");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, bonus) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        if (bonus >= 0) {
            _this._bonus = bonus;
        }
        else {
            _this._bonus = 0;
        }
        return _this;
    }
    Object.defineProperty(Gerente.prototype, "bonus", {
        get: function () {
            return this._bonus;
        },
        set: function (new_bonus) {
            if (new_bonus >= 0) {
                this._bonus = new_bonus;
            }
            else {
                console.log("Bônus inválido.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Gerente.prototype.descricao = function () {
        console.log("Nome: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: R$ ").concat((this.salario + this.bonus).toFixed(2)));
    };
    return Gerente;
}(Funcionario_1.Funcionario));
exports.Gerente = Gerente;
