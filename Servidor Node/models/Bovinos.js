const Sequelize = require('sequelize')
const db = require('../database/db.js')
db
module.exports = db.sequelize.define(
    'bovinos',
    {
        Brinco: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING
        },
        Situacao: {
            type: Sequelize.STRING
        },
        Sexo: {
            type: Sequelize.BOOLEAN
        },
        BrincoMae: {
            type: Sequelize.STRING
        },
        BrincoPai: {
            type: Sequelize.STRING
        },
        Raca: {
            type: Sequelize.STRING
        },
        DTNasc: {
            type: Sequelize.DATE,
        },
        DTPrenhes: {
            type: Sequelize.DATE,
        },
        DTProximoParto: {
            type: Sequelize.DATE,
        },
        DTUltimoParto: {
            type: Sequelize.DATE,
        },
        DTCadastro: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)
