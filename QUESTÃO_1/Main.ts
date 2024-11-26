import { Empresa } from "./Empresa";
import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";

let Zé = new Funcionario("Seu Zé", "T.I.",2000)
let Dona = new Funcionario("Dona Fernanda","Engenheira",3000)
let Sapo = new Funcionario("Sapo", "sapo",5000)

let Carlos = new Gerente("Carlos","Gerente",10000,500)
let Robô = new Gerente("Robô","Gerente Robõ",20000,500)

let Tech = new Empresa("Tech soluções",[Zé,Dona,Sapo,Carlos,Robô])

Tech.listarFuncionarios();

Dona.aplicarAumento(10);
Sapo.aplicarAumento(15);

Carlos.aplicarAumento(10);
Robô.bonus = 750;

Tech.listarFuncionarios();