export class Contador {
    valor: number

    constructor() {
        this.valor = 0
    }

    zerar() {
        this.valor = 0;
    }

    incrementar() {
        this.valor++;
    }

    getValor(): number {
        return this.valor;
    }
}


const contador1 = new Contador()
console.log(contador1.getValor())
contador1.incrementar()
console.log(contador1.getValor())
contador1.zerar()
console.log(contador1.getValor())