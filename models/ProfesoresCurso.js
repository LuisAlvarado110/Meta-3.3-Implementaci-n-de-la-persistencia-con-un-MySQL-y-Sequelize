'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProfesorCursos extends Model {
    static associate(models) {
      // Relación muchos a muchos entre Profesores y Cursos
      ProfesorCursos.belongsTo(models.Profesor, {
        foreignKey: 'profesorId',
        as: 'profesor',
      });
      ProfesorCursos.belongsTo(models.Cursos, {
        foreignKey: 'cursoId',
        as: 'curso',
      });
    }
  }

  ProfesorCursos.init(
    {
      profesorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cursoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ProfesorCursos',
      timestamps: false, // Puedes habilitarlo si deseas registrar fecha de creación/actualización
    }
  );

  return ProfesorCursos;
};
