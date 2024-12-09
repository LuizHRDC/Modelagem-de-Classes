class Calculadora {
    
    historico: string[]

    constructor() {
        this.historico = []
    }

    somar(a: number, b: number): number {
        const resultado = a + b
        this.adicionarAoHistorico('Soma', a, b, resultado)
        return resultado
    }

    multiplicar(a: number, b: number): number {
        const resultado = a * b
        this.adicionarAoHistorico('Multiplicação', a, b, resultado)
        return resultado
    }

    dividir(a: number, b: number): number | string {
        if (b === 0) {
            this.adicionarAoHistorico('Divisão', a, b, 'Erro: Divisão por zero')
            return 'Erro: Divisão por zero'
        }
        const resultado = a / b
        this.adicionarAoHistorico('Divisão', a, b, resultado)
        return resultado
    }

    diminuir(a: number, b: number): number {
        const resultado = a - b
        this.adicionarAoHistorico('Subtração', a, b, resultado)
        return resultado
    }


    adicionarAoHistorico(operacao: string, a: number, b: number, resultado: number | string): void {
        this.historico.push(`${operacao}: ${a} e ${b} = ${resultado}`)
    }

    visualizarHistorico(): void {
        if (this.historico.length === 0) {
            console.log('Histórico vazio.')
        } else {
            console.log('Histórico das operações:')
            this.historico.forEach(entrada => console.log(entrada))
        }
    }
}

const calc = new Calculadora()
console.log(calc.somar(2, 3))
console.log(calc.multiplicar(4, 5))
console.log(calc.dividir(10, 2))
console.log(calc.diminuir(9, 4))
calc.visualizarHistorico()
