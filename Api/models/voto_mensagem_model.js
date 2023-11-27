const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("db_projeto", "luiz", "SysAdm1!", {
    host: "localhost",
    dialect: "mysql",
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Sync the database
        await sequelize.sync({force: true});

        // Your application logic here

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
const VotoMensagem = sequelize.define(
    "votoMensagem",
    {
        idvoto_mensagem: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        idusuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idmensagem: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        voto_mensagem: DataTypes.BOOLEAN,
    },
    {
        tableName: "voto_mensagem", // Substitua pelo nome real da sua tabela
        timestamps: true, // Se a tabela não possui colunas createdAt e updatedAt
    }
);

module.exports = {
    VotoMensagem,
};
