const ItemCardapio = require("./ItemCardapio")

class Bebida extends ItemCardapio {
    descricao() {
        return "Bebida pronta para o pedido"
    }
}

module.exports = Bebida