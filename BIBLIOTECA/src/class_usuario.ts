import { ItemBiblioteca } from "./abstract_item";

export class Usuario{
    constructor(private _nome : string, private _id_user : number) {}
    
    get nome() : string {
        return this._nome;
    }

    emprestar_item(item : ItemBiblioteca) : void{
        console.log(`${this.nome} emprestou => ${item.exibir_info()}`);
    }
}