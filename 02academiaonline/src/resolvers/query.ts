import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
    estudiante(__: void, { id }): any {
      const resultado = database.estudiantes.find((estudiante) => estudiante.id === id);
      if (typeof resultado === 'undefined') {
        return {
          id: '-1',
          name: `Estudiante no encontrado con el id: ${id}`,
          email: '',
          website: '',
          courses: [],
        };
      }
      return resultado;
    },

    cursos(): any {
      return database.cursos;
    },
    curso(__: void, { curso }): any {
      const resultado = database.cursos.find((elCurso) => elCurso.id === curso);
      if (typeof resultado === 'undefined') {
        return {
          id: '-1',
          title: `No se encontro el curso con el id:${curso}`,
          description: '',
          clases: -1,
          time: 0.0,
          logo: '',
          level: 'TODOS',
          path: '',
          teacher: '',
          students: [],
          reviews: [],
        };
      }
      return resultado;
    },
  },
};

export default query;
