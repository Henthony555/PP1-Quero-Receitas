const conexao = require('../conexao')

const Ingrediente = conexao.sequelize.define('ingrediente', {
    codigo: {
        type: conexao.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_ingrediente: {
        type: conexao.Sequelize.STRING,
        allowNull: false
    }
});

Ingrediente.sync()