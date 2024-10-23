const express = require('express');
const router = express.router();
const cliente = require('../controllers/cliente');
const estacionamento = require('../controllers/estacionamento');
const quarto = require('../controllers/quarto');
const reservas = require('../controllers/reservas');
const telefone = require('../controllers/telefona');

const teste = (req,res) =>{
    res.json("API lista respondendo com sucesso");
}

router.post("/", cliente.update);
router.get("/", cliente.read);
router.put("/", cliente.update);
router.delete("/ :idcliente", cliente.delete);

router.post("/", estacionamento.create);
router.get("/", estacionamento.read);
router.put("/", estacionamento.update);
router.delete("/ :idcliente", estacionamento.delete);

router.post("/", quarto.create);
router.get("/", quarto.read);
router.put("/", quarto.update);
router.delete("/ :idcliente", quarto.delete);

router.post("/", reservas.create);
router.get("/", reservas.read);
router.put("/", reservas.update);
router.delete("/ :idcliente", reservas.delete);

router.post("/", telefone.create);
router.get("/", telefone.read);
router.put("/", telefone.update);
router.delete("/ :idcliente", telefone.delete);

module.exports = router;