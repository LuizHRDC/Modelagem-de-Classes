class contaCorrente {
    conta: number
    nome: string
    saldo: number 

    constructor(conta: number, nome: string, saldo?: number) {
        this.conta = conta
        this.nome = nome
        this.saldo = saldo ?? 0
    }

    alterarNome(nome: string): void {
        this.nome = nome
        console.log(`Nome atualizado: ${this.nome}`)
    }

    deposito(valor: number): void {
        this.saldo += valor
        console.log(`Saldo atualizado: ${this.saldo}`)
    }

    saque(valor: number): void {
        if (valor > this.saldo && valor <= 0) {
            console.log("Solicite o saque de um valor válido!")
        } else {
            this.saldo -= valor
            console.log(`Saldo atualizado: ${this.saldo}`)
        }
    }
}

const conta1 = new contaCorrente(1, "Luiz", 500)
conta1.saque(400)
conta1.deposito(300)
conta1.alterarNome("João")
