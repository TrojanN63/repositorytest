import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{
    private _bonus : number;
    constructor(nome : string, cargo : string, salario : number, bonus : number){
        super(nome,cargo,salario);
        if (bonus >= 0){
            this._bonus = bonus;
        }else {
            this._bonus = 0
        }
    }

    get bonus():number{
        return this._bonus;
    }
    set bonus(new_bonus : number){
        if (new_bonus >= 0){
            this._bonus = new_bonus;
        }else{
            console.log("Bônus inválido.")
        }
    }
    public descricao() : void{
        console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${(this.salario + this.bonus).toFixed(2)}`)
    }
}