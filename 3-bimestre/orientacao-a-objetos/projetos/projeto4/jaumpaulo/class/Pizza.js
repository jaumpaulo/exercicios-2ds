const ItemCardapio = require("./ItemCardapio")

class Pizza extends ItemCardapio {
    descricao() {
        return "Pizza pronta para o pedido"
    }
}

module.exports = Pizza