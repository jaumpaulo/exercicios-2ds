let impressos = require("./impressos");
let clientes = require("./clientes");
let promocoes = require("./promocoes")

const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({mensagem: "API de Grafica"})
})

router.use("/impressos", impressos) 
router.use("/clientes", clientes)
router.use("/promocoes", promocoes)

module.exports = router