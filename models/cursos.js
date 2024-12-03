'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      // Relación muchos a muchos con Estudiantes mediante una tabla intermedia
      Curso.belongsToMany(models.Estudiante, {
        through: 'EstudianteCursos',
        foreignKey: 'cursoId',
        otherKey: 'estudianteId',
      });
    }
  }

  Curso.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      claveCurso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      nombreCurso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creditos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Curso',
    }
  );

  return Curso;
};
