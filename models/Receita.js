const conexao = require('../conexao')

const Receita = conexao.sequelize.define('receita', {
    codigo: {
        type: conexao.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_receita: {
        type: conexao.Sequelize.STRING,
        allowNull: false
    },
    imagens: {
        type: conexao.Sequelize.BLOB,
        allowNull: false
    },
    tempo_preparo: {
        type: conexao.Sequelize.TIME,
        allowNull: false
    },
    num_porcoes: {
        type: conexao.Sequelize.INTEGER,
        allowNull: false
    },
    modo_preparo: {
        type: conexao.Sequelize.TEXT,
        allowNull: false
    },
    id_usuario: {
        type: conexao.Sequelize.INTEGER,
        references: {
            model: 'usuario',
            key: 'id'
        }
    }
});
Receita.sync()