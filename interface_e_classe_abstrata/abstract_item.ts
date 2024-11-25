export abstract class ItemBiblioteca{
    constructor(protected titulo: string, protected ano_publicado : number){}

    abstract exibir_info() : void;
}