export class Usuario {
    constructor(_nome, _id_user) {
        this._nome = _nome;
        this._id_user = _id_user;
    }
    get nome() {
        return this._nome;
    }
    emprestar_item(item) {
        console.log(`${this.nome} emprestou => ${item.exibir_info()}`);
    }
}
