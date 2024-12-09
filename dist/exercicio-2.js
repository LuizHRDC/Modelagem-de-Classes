"use strict";
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(cor) {
        this.cor = cor;
    }
    mostrarCor() {
        console.log(`A cor é ${this.cor}`);
    }
}
const bola1 = new Bola('Vermelho', '60cm', 'Plástico');
bola1.mostrarCor();
bola1.trocarCor("Branco");
bola1.mostrarCor();
