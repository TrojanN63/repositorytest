"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa_1 = require("./Empresa");
var Funcionario_1 = require("./Funcionario");
var Gerente_1 = require("./Gerente");
var Zé = new Funcionario_1.Funcionario("Seu Zé", "T.I.", 2000);
var Dona = new Funcionario_1.Funcionario("Dona Fernanda", "Engenheira", 3000);
var Sapo = new Funcionario_1.Funcionario("Sapo", "sapo", 5000);
var Carlos = new Gerente_1.Gerente("Carlos", "Gerente", 10000, 500);
var Robô = new Gerente_1.Gerente("Robô", "Gerente Robõ", 20000, 500);
var Tech = new Empresa_1.Empresa("Tech soluções", [Zé, Dona, Sapo, Carlos, Robô]);
Tech.listarFuncionarios();
Dona.aplicarAumento(10);
Sapo.aplicarAumento(15);
Carlos.aplicarAumento(10);
Robô.bonus = 750;
Tech.listarFuncionarios();
