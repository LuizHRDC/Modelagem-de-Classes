"use strict";
class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidaDeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidaDeCombustivel;
    }
    abastecerPorValor(dinheiro) {
        if (dinheiro > 0 && (this.quantidadeCombustivel / dinheiro > 0)) {
            const quantidadeLitros = (dinheiro / this.valorLitro);
            const atualizar = this.quantidadeCombustivel -= quantidadeLitros;
            this.quantidadeCombustivel = atualizar;
            console.log(`O valor de R$ ${dinheiro} abasteceu ${quantidadeLitros} litros de combustível`);
            console.log(`Total de combustível restante: ${this.quantidadeCombustivel}`);
        }
        else {
            console.log("Valor ou quantidade de combustível insuficiente!");
        }
    }
    abastecerPorLitro(quantidadeLitros) {
        if (this.quantidadeCombustivel >= quantidadeLitros) {
            const totalPagar = quantidadeLitros * this.valorLitro;
            const atualizar = this.quantidadeCombustivel -= quantidadeLitros;
            this.quantidadeCombustivel = atualizar;
            console.log(`O valor a pagar em ${quantidadeLitros} litros foi de R$ ${totalPagar}`);
            console.log(`Total de combustível restante: ${this.quantidadeCombustivel}`);
        }
        else {
            console.log("Quantidade de combustível insuficiente");
        }
    }
    alterarValor(novoValor) {
        if (novoValor > 0) {
            this.valorLitro = novoValor;
            console.log(`Valor do litro alterado! novo valor R$: ${this.valorLitro}`);
        }
        else {
            console.log("Valor precisa ser positivo!");
        }
    }
    alterarCombustivel(combustivel) {
        this.tipoCombustivel = combustivel;
        console.log(`Tipo de combustível alterado com sucesso para ${combustivel}`);
    }
    alterarQuantidadeCombustivel(quantidade) {
        if (quantidade > 0) {
            this.quantidadeCombustivel = quantidade;
            console.log(`Alterada a quantidade de combustível para ${this.quantidadeCombustivel} litros`);
        }
        else {
            console.log("Quantidade precisa ser positiva!");
        }
    }
}
const postoDeGasolina = new BombaCombustivel('gasolinaComun', 5, 600);
postoDeGasolina.abastecerPorValor(300);
postoDeGasolina.abastecerPorLitro(30);
postoDeGasolina.alterarValor(6);
postoDeGasolina.alterarCombustivel("Etanol");
postoDeGasolina.alterarQuantidadeCombustivel(700);
