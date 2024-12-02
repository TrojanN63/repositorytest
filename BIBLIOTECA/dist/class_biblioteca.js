export class Biblioteca {
    constructor() {
        this.itensDisponiveis = [];
        this.usuarios = [];
    }
    adicionar_item(item) {
        this.itensDisponiveis.push(item);
        console.log(`Item adicionado => ${item.exibir_info()}`);
    }
    registrar_usuario(user) {
        this.usuarios.push(user);
        console.log(`Usuário Registrado => ${user.nome}`);
    }
    emprestar_item(user, item) {
        console.log(`Item ${item.exibir_info()} emprestado para ${user.nome}`);
    }
}
