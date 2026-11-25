const fs = require('fs/promises')
const arquivo = process.env.ARQUIVO_ORDENS || 'ordens.json'

async function listar() {
    try {
        const dados = await fs.readFile(arquivo, 'utf-8')
        return JSON.parse(dados)
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            return []
        }

        throw erro
    }
}

async function salvar(ordem) {
    const lista = await listar()
    lista.push(ordem)
    await fs.writeFile(arquivo, JSON.stringify(lista, null, 2))

    return ordem
}

async function atualizar(id, dados) {
    const lista = await listar()
    const indice = lista.findIndex(ordem => ordem.id === id)

    if (indice === -1) {
        return null
    }

    lista[indice] = {
        ...lista[indice],
        ...dados,
        id: lista[indice].id
    }

    await fs.writeFile(arquivo, JSON.stringify(lista, null, 2))
    return lista[indice]
}

async function remover(id) {
    const lista = await listar()
    const indice = lista.findIndex(ordem => ordem.id === id)

    if (indice === -1) {
        return false
    }

    lista.splice(indice, 1)
    await fs.writeFile(arquivo, JSON.stringify(lista, null, 2))
    return true
}

async function contar() {
    const lista = await listar()
    return lista.length
}

module.exports = { listar, salvar, atualizar, remover, contar }
