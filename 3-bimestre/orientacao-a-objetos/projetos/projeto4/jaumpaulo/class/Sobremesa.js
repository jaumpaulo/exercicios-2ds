const ItemCardapio = require("./ItemCardapio")

class Sobremesa extends ItemCardapio {
    descricao() {
        return "Sobremesa pronta para o pedido"
    }
}

module.exports = Sobremesa