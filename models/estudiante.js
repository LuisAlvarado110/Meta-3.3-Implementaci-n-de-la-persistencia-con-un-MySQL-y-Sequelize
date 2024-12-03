'use strict';

// Modelo Sequelize
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudiante extends Model {
    static associate(models) {
      // Definir asociaciones aquí
    }
  }

  Estudiante.init({
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    semestre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cursosInscritos: {
      type: DataTypes.JSON, // Para almacenar una lista de cursos
      defaultValue: [],
    },
  }, {
    sequelize,
    modelName: 'Estudiante',
  });

  return Estudiante;
};
