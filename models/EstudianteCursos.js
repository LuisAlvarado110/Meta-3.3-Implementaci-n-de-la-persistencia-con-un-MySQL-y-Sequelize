'use strict';
module.exports = (sequelize, DataTypes) => {
  const EstudianteCursos = sequelize.define(
    'EstudianteCursos',
    {
      estudianteId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      cursoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    { timestamps: false }
  );

  return EstudianteCursos;
};
