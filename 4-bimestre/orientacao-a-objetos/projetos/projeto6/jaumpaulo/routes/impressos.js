const express = require("express")
const router = express.Router()

let impressos = [
    { id: 1, nome: "Cartao de Visita", acabamento: "verniz", preco: 120, disponivel: true },
    { id: 2, nome: "Banner", acabamento: "lona", preco: 200, disponivel: true },
    { id: 3, nome: "Adesivo", acabamento: "vinil", preco: 80, disponivel: false }
]

router.get("/", (req, res) => {
    res.json(impressos)
})

router.get("/disponiveis", (req, res) => {
    res.json(impressos.filter(impressos => impressos.disponivel))       
})

router.get("/total", (req, res) => {
    res.json({total: impressos.length})
})

router.post("/", (req, res) => {
    res.statusCode = 201
    res.json({mensagem: "Cadastro de impresso realizado"})
})

module.exports = router