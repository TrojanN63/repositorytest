export class Funcionario {
    private _nome : string;
    private _cargo : string;
    private _salario : number;

    constructor(nome:string,cargo:string,salario:number){
        this._nome = nome;
        this._cargo = cargo;
        this._salario = salario;
    }

    public get nome() : string{
        return this._nome;
    }
    public get cargo() : string{
        return this._cargo;
    }
    public get salario() : number{
        return this._salario;
    }

    public set nome(new_nome : string){
        this._nome = new_nome;
    }
    public set cargo(new_cargo : string){
        this._cargo = new_cargo;
    }
    public aplicarAumento(percentual : number){
        if (percentual > 0){
            this._salario *= 1+(percentual/100)
        }else{
            console.log("Não é aceito percentual negativo ou nulo.")
        }
    }
    public descricao() : void{
        console.log(`Nome: ${this._nome}, Cargo: ${this._cargo}, Salário: R$ ${this._salario.toFixed(2)}`)
    }
}