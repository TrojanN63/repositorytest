import { Livro } from '../dist/class_livro.js';
import { Revista } from '../dist/class_revista.js';
import { Usuario } from '../dist/class_usuario.js';
import { Biblioteca } from '../dist/class_biblioteca.js';

const biblioteca = new Biblioteca();
const livro1 = new Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1216);
const revista1 = new Revista("National Geographic", 2024, "NG Media", 150);
const usuario1 = new Usuario("Maria Silva", 1);

biblioteca.adicionar_item(livro1);
biblioteca.adicionar_item(revista1);
biblioteca.registrar_usuario(usuario1);

function exibirItens() {
  const bibliotecaDiv = document.getElementById('biblioteca');
  if (bibliotecaDiv) {
    bibliotecaDiv.innerHTML = `
      <h2>Itens Disponíveis</h2>
      <p>${livro1.exibir_info()}</p>
      <p>${revista1.exibir_info()}</p>
    `;
  }
}

// Chama a função para exibir os itens
exibirItens();