'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      Profesor.belongsToMany(models.Cursos, {
        through: models.ProfesorCursos, // Usa la tabla intermedia
        foreignKey: 'profesorId',
        otherKey: 'cursoId',
        as: 'cursos',
      });
    }
    
  }

  Profesor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numEmpleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Profesor',
    }
  );

  return Profesor;
};
