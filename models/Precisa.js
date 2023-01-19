const conexao = require('../conexao')

const Precisa = conexao.sequelize.define('precisa', {
    cod_ingrediente: {
        type: conexao.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'ingrediente',
            key: 'codigo'
        }
    },
    cod_receita: {
        type: conexao.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'receita',
            key: 'codigo'
        }
    }
});
Precisa.sync()



