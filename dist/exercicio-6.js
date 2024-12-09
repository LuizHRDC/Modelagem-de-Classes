"use strict";
class Carro {
    constructor(consumoCombustivelKML, quantidadeCombustivel) {
        this.quantidadeCombustivel = 0;
        this.consumoKmL = consumoCombustivelKML;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    andar(distancia) {
        if (distancia > 0) {
            const litrosConsumidos = distancia / this.consumoKmL;
            if (litrosConsumidos <= this.quantidadeCombustivel) {
                this.quantidadeCombustivel -= litrosConsumidos;
                console.log(`Você gastou ${(litrosConsumidos).toFixed(2)} litros e percorreu ${distancia} Km. Quantidade de combustível restante: ${(this.quantidadeCombustivel).toFixed(2)} litros.`);
            }
            else {
                console.log(`Combustível insuficiente! Você pode percorrer até ${this.quantidadeCombustivel * this.consumoKmL} Km com o combustível atual.`);
            }
        }
        else {
            console.log('Informe uma distância válida.');
        }
    }
    obterGasolina() {
        console.log(`Total de combustível disponível: ${(this.quantidadeCombustivel).toFixed(2)} litros.`);
    }
    adicionarGasolina(litros) {
        if (litros > 0) {
            this.quantidadeCombustivel += litros;
            console.log(`${litros} litros de combustível abastecido com sucesso! Quantidade de combustível atual: ${(this.quantidadeCombustivel).toFixed(2)} litros.`);
        }
        else {
            console.log('Informe uma quantidade de litros válida.');
        }
    }
}
const meuFusca = new Carro(8, 100);
meuFusca.andar(48);
meuFusca.adicionarGasolina(50);
meuFusca.obterGasolina();
