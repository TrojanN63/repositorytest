import { ItemBiblioteca } from "./abstract_item.js";
import { Usuario } from "./class_usuario.js";

export class Biblioteca {
    private itensDisponiveis : ItemBiblioteca[] = [];
    private usuarios : Usuario[] = [];

    adicionar_item(item : ItemBiblioteca) : void {
        this.itensDisponiveis.push(item);
        console.log(`Item adicionado => ${item.exibir_info()}`);
    }
    registrar_usuario(user : Usuario) : void {
        this.usuarios.push(user);
        console.log(`Usuário Registrado => ${user.nome}`)
    }
    emprestar_item(user : Usuario , item : ItemBiblioteca) : void {
        console.log(`Item ${item.exibir_info()} emprestado para ${user.nome}`)
    }
}