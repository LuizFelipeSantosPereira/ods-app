const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db_projeto", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Log = sequelize.define(
  "Log",
  {
    idLog: {
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
    voto_mensagem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id_meta_ods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idvoto_meta_ods: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voto_ods: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "log",
    timestamps: true,
  }
);

module.exports = {
  Log,
};
