const Escritura = require("./Escritura")

class Factory {
    static criar(tipo, proprietario) {
        if(proprietario) {
            if(tipo === "compraVenda") {
                return new Escritura.CompraVenda(proprietario)
            } else if(tipo === "doacao") {
                return new Escritura.Doacao(proprietario)
            } else if(tipo === "usufruto") {
                return new Escritura.Usufruto(proprietario)
            } else if(tipo === "permuta") {
                return new Escritura.Permuta(proprietario)
            } else {
                throw new Error("Tipo de escritura inválido")
            }
        } else {
            throw new Error("Proprietário é obrigatório")
        }
    }
}

module.exports = Factory