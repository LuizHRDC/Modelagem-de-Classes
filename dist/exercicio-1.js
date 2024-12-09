"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
class Contador {
    constructor() {
        this.valor = 0;
    }
    zerar() {
        this.valor = 0;
    }
    incrementar() {
        this.valor++;
    }
    getValor() {
        return this.valor;
    }
}
exports.Contador = Contador;
const contador1 = new Contador();
console.log(contador1.getValor());
contador1.incrementar();
console.log(contador1.getValor());
contador1.zerar();
console.log(contador1.getValor());
