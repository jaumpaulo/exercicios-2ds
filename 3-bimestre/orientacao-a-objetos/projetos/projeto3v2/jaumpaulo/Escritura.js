class Escritura {
    constructor(proprietario) {
        this.proprietario = proprietario
    }

    emitir() {
        return ""
    }
}

class CompraVenda extends Escritura {
    emitir() {
        return `Escritura de compra e venda emitida para: ${this.proprietario}`
    }
}

class Doacao extends Escritura {
    emitir() {
        return `Escritura de doação emitida para: ${this.proprietario}`
    }
}

class Usufruto extends Escritura {
    emitir() {
        return `Escritura de usufruto emitida para: ${this.proprietario}`
    }
}

class Permuta extends Escritura {
    emitir() {
        return `Escritura de permuta emitida para: ${this.proprietario}`
    }
}

module.exports = Escritura
module.exports.CompraVenda = CompraVenda
module.exports.Doacao = Doacao
module.exports.Usufruto = Usufruto
module.exports.Permuta = Permuta