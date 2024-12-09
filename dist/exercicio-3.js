"use strict";
class contaCorrente {
    constructor(conta, nome, saldo) {
        this.conta = conta;
        this.nome = nome;
        this.saldo = saldo !== null && saldo !== void 0 ? saldo : 0;
    }
    alterarNome(nome) {
        this.nome = nome;
        console.log(`Nome atualizado: ${this.nome}`);
    }
    deposito(valor) {
        this.saldo += valor;
        console.log(`Saldo atualizado: ${this.saldo}`);
    }
    saque(valor) {
        if (valor > this.saldo && valor <= 0) {
            console.log("Solicite o saque de um valor válido!");
        }
        else {
            this.saldo -= valor;
            console.log(`Saldo atualizado: ${this.saldo}`);
        }
    }
}
const conta1 = new contaCorrente(1, "Luiz", 500);
conta1.saque(400);
conta1.deposito(300);
conta1.alterarNome("João");
