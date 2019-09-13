const express = require('express')
const bovinos = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const Bovinos = require('../models/Bovinos')
bovinos.use(cors())

process.env.SECRET_KEY = 'secret'

bovinos.post('/registrarBovino', (req, res) => {
    const today = new Date()
    const bovino = {
        Brinco: req.body.Brinco,
        Nome: req.body.Nome,
        Situacao: req.body.Situacao,
        Sexo: req.body.Sexo,
        BrincoMae: req.body.BrincoMae,
        BrincoPai: req.body.BrincoPai,
        Raca: req.body.Raca,
        DTNasc: req.body.DTNasc,
        DTPrenhes: req.body.DTPrenhes,
        DTProximoParto: req.body.DTProximoParto,
        DTUltimoParto: req.body.DTUltimoParto,
        DTCadastro: req.body.DTCadastro,
    }

    //console.log(req.body);

    Bovinos.create(bovino)
        .then(bovino => {
            if (bovino) {
                res.json(bovino)
            } else {
                res.send(false);
            }
            console.log(bovino);
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

bovinos.get('/buscaBrinco', (req, res) => {
    console.log('Busca: ' + req.query.brinco)
    Bovinos.findOne({
        where: {
            Brinco: req.query.brinco
        }
    }).then(bovinos => {
            if (bovinos) {
                res.json(bovinos);
            } else {
                res.send(false);
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

bovinos.get('/buscaBrincoNome', (req, res) => {
    console.log('Busca: ' + req.query.nome)
    Bovinos.findOne({
        where: {
            Nome: req.query.nome
        }
    }).then(bovinos => {
            if (bovinos) {
                res.json(bovinos);
            } else {
                res.send(false);
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

bovinos.post('/updateBovino', (req, res) => {
    console.log("Chamou update");
    console.log(req.body);
    Bovinos.update(
        req.body, {
            where: {
                Nome: req.body.Nome
            }
        })
        .then(bovino => {
            if (bovino) {
                res.json(bovino)
            } else {
                res.send(false);
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = bovinos
