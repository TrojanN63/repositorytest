import { Livro } from "../class_livro";
import { Revista } from "../class_revista";
import { Usuario } from "../class_usuario";
import { Biblioteca } from "./class_biblioteca";

const livro1 = new Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1216);
const revista1 = new Revista("National Geographic", 2024, "NG Media", 150);
const usuario1 = new Usuario("Maria Silva", 1);
const biblioteca = new Biblioteca();

biblioteca.adicionar_item(livro1);
biblioteca.adicionar_item(revista1);
biblioteca.registrar_usuario(usuario1);

usuario1.emprestar_item(livro1);