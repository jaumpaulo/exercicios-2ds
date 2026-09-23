class ItemCardapio {
    #nome
    #tempoDePreparoEmMinutos

    constructor(nome, tempoDePreparoEmMinutos) {
        this.#nome = nome
        this.#tempoDePreparoEmMinutos = tempoDePreparoEmMinutos
    }

    get nome() {
        return this.#nome
    }

    get tempoDePreparoEmMinutos() {
        return this.#tempoDePreparoEmMinutos
    }

    descricao() {
        return "Item cadastrado no cardápio"
    }
}

module.exports = ItemCardapio