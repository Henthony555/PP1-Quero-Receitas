const conexao = require('../conexao')

const Usuario = conexao.sequelize.define('usuario', {
    id: {
        type: conexao.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_usuario: {
        type: conexao.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: conexao.Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    dt_nascimento: {
        type: conexao.Sequelize.DATE,
        allowNull: false
    },
    senha: {
        type: conexao.Sequelize.STRING,
        allowNull: false
    }
});

Usuario.sync()