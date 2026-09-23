class Cardapio {
    constructor(nome) {
        this.nome = nome
        this.categorias = []
        this.membros = []
    }

    adicionarCategoria(ingrediente) {
        this.categorias.push(ingrediente)
    }

    adicionarMembro(membro) {
        this.membros.push(membro)
    }
}

module.exports = Cardapio