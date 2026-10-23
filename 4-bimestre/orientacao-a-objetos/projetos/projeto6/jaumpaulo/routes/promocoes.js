const express = require("express")
const router = express.Router()

let promocoes = [
    { id: 1, nome: "Cartao de Visita", desconto: 10 },
    { id: 2, nome: "Banner", desconto: 20 }
]

router.get("/", (req, res) => {
    res.json(promocoes)
})

router.get("/total", (req, res) => {
    res.json({total: promocoes.length})
})

module.exports = router