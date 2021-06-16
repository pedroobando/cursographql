import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const notCurso = {
  id: '-1',
  title: '',
  description: '',
  level: '',
  logo: '',
  path: '',
  reviews: [],
  teacher: '',
  time: 0,
  clases: -1,
};

const notfoundCurso = { ...notCurso, title: 'Curso no encontrado' };
const foundTitleCurso = { ...notCurso, title: 'Curso ya registrado con ese titulo' };

const mutation: IResolvers = {
  Mutation: {
    cursoNuevo(__: void, { curso }): any {
      const itemCurso = {
        id: String(database.cursos.length + 1),
        title: curso.title,
        description: curso.description,
        clases: curso.clases,
        time: curso.time,
        logo: curso.logo,
        level: curso.level,
        path: curso.path,
        teacher: curso.teacher,
        reviews: [],
      };

      if (
        database.cursos.filter((elCurso) => elCurso.title == itemCurso.title).length > 0
      ) {
        return {
          ...foundTitleCurso,
          title: `Curso ya registrado con ese titulo ${curso.title}`,
        };
      }

      database.cursos.push(itemCurso);
      return itemCurso;
    },

    cursoModif(__: void, { curso }): any {
      const oldCursoData = database.cursos.find((elCurso) => elCurso.id === curso.id);
      if (typeof oldCursoData == 'undefined')
        return { ...notfoundCurso, title: `Curso no encontrado, con id:${curso.id}` };

      const newCurso = { ...curso, reviews: [...oldCursoData.reviews] };
      database.cursos = [
        ...database.cursos.filter((elCurso) => elCurso.id !== curso.id),
        newCurso,
      ];

      return newCurso;
    },

    cursoElimi(__: void, { id }): any {
      const oldCursoData = database.cursos.find((elCurso) => elCurso.id === id);
      if (typeof oldCursoData == 'undefined')
        return { ...notfoundCurso, title: `Curso no encontrado, con id:${id}` };

      database.cursos = [...database.cursos.filter((elCurso) => elCurso.id !== id)];

      return oldCursoData;
    },
  },
};

export default mutation;
