const Lanche = require("./Lanche")
const Pizza = require("./Pizza")
const Sobremesa = require("./Sobremesa")
const Bebida = require("./Bebida")

class ItemCardapioFactory {
    static criar(tipo, nome, tempoDePreparoEmMinutos) {
        switch (tipo) {
            case "lanche":
                return new Lanche(nome, tempoDePreparoEmMinutos)

            case "pizza":
                return new Pizza(nome, tempoDePreparoEmMinutos)

            case "sobremesa":
                return new Sobremesa(nome, tempoDePreparoEmMinutos)

            case "bebida":
                return new Bebida(nome, tempoDePreparoEmMinutos)

            default:
                throw new Error("Tipo de item inválido")
        }
    }
}

module.exports = ItemCardapioFactory