"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filme_1 = require("./Filme");
var Catalogo_1 = require("./Catalogo");
function filtrarFilmesPorAno(filmes, ano) {
    var nova_lista = [];
    filmes.forEach(function (movie) {
        if (movie.anoLancamento >= ano) {
            nova_lista.push(movie);
        }
    });
    return nova_lista;
}
var a_origem = new Filme_1.Filme("A Origem", "Christopher Nolan", 2010, [5, 4]);
var interestelar = new Filme_1.Filme("Interestelar", "Christopher Nolan", 2014, [5, 5]);
var matrix = new Filme_1.Filme("Matrix", "Lana e Lilly Wachowski", 1999, [4, 4]);
var pulp_fiction = new Filme_1.Filme("Pulp Fiction: tempo de Violência", "Quentin Tarantino", 1994, [5, 4]);
var duna = new Filme_1.Filme("Duna", "Denis Villeneuve", 2021, [5, 5]);
var catalogo = new Catalogo_1.Catalogo([a_origem, interestelar, matrix, pulp_fiction, duna]);
var filmes_2000 = new Catalogo_1.Catalogo(filtrarFilmesPorAno(catalogo.filmes, 2000));
filmes_2000.listarFilmes();
