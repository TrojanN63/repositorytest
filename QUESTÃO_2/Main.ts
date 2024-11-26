import { Filme } from "./Filme";
import { Catalogo} from "./Catalogo";

function filtrarFilmesPorAno(filmes : Filme[], ano: number) : Filme[]{
    let nova_lista : Filme[] = []
    filmes.forEach(movie => {
        if (movie.anoLancamento >= ano){
            nova_lista.push(movie)
        }
    });
    return nova_lista
}

let a_origem = new Filme("A Origem", "Christopher Nolan", 2010, [5,4])
let interestelar = new Filme("Interestelar", "Christopher Nolan", 2014, [5,5])
let matrix = new Filme("Matrix", "Lana e Lilly Wachowski", 1999, [4,4])
let pulp_fiction = new Filme("Pulp Fiction: tempo de Violência", "Quentin Tarantino", 1994, [5,4])
let duna = new Filme("Duna", "Denis Villeneuve", 2021, [5,5])

let catalogo = new Catalogo([a_origem,interestelar,matrix,pulp_fiction,duna])

let filmes_2000 = new Catalogo (filtrarFilmesPorAno(catalogo.filmes,2000))
filmes_2000.listarFilmes()