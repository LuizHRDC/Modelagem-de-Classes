class Bola {
    cor: string
    circunferencia: string
    material: string

    constructor(cor: string, circunferencia: string, material: string) {
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }

    trocarCor(cor: string) {
        this.cor = cor
    }

    mostrarCor(){
        console.log(`A cor é ${this.cor}`)
    }
}

const bola1 = new Bola('Vermelho', '60cm', 'Plástico')
bola1.mostrarCor()
bola1.trocarCor("Branco")
bola1.mostrarCor()