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
exports.Livro = void 0;
var abstract_item_1 = require("../src/abstract_item");
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro(titulo, anoPublicado, autor, numero_paginas) {
        var _this = _super.call(this, titulo, anoPublicado) || this;
        _this.autor = autor;
        _this.numero_paginas = numero_paginas;
        return _this;
    }
    Livro.prototype.exibir_info = function () {
        return "Livro: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", Ano: ").concat(this.ano_publicado, ", P\u00E1ginas: ").concat(this.numero_paginas);
    };
    return Livro;
}(abstract_item_1.ItemBiblioteca));
exports.Livro = Livro;