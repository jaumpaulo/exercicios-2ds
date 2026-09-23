const ItemCardapio = require("./ItemCardapio")

class Lanche extends ItemCardapio {
    constructor(nome, tempoDePreparoEmMinutos) {
        super(nome, tempoDePreparoEmMinutos)
        this.registros = []
    }

    descricao() {
        return "Lanche pronto para o pedido"
    }

    adicionarRegistro(registro) {
        if (registro.valor < 0) {
            throw new Error("Valor inválido")
        }

        this.registros.push(registro)
    }
}

module.exports = Lanche