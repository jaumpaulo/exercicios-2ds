function carregarConfig(a, b, c) {
        a = process.env.SERVICO
        b = Number(process.env.PORT)
        c = process.env.AMBIENTE
}

module.exports = carregarConfig