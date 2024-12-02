import { Funcionario } from "./Funcionario";
export class Empresa {
    private _nome : string;
    private _funcionarios : Funcionario[]
    constructor(nome : string, funcionarios : Funcionario[]){
        this._nome = nome;
        this._funcionarios = funcionarios;
    }
    adicionarFuncionario(funcionario : Funcionario){
        this._funcionarios.push(funcionario);
    }
    listarFuncionarios(){
        this._funcionarios.forEach(funcionario => {
            funcionario.descricao();
        });
        console.log("----------------------");
    }
}