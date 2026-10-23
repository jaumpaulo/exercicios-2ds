const express = require("express")
const router = express.Router()

let clientes = [
    { id: 1, nome: "Ana", empresa: "Padaria Sol" },
    { id: 2, nome: "Bruno", empresa: "Loja Vista" }
]

router.get("/", (req, res) => {
    res.json(clientes)
})

router.get("/total", (req, res) => {
    res.json({total: clientes.length})
})

module.exports = router