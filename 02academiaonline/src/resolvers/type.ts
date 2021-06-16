import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
// import _ from 'lodash';

const type: IResolvers = {
  Estudiante: {
    courses: (parent) => {
      let cursosLista: Array<any> = [];
      parent.courses.map((curso: string) => {
        cursosLista = [...cursosLista, database.cursos.find((elc) => elc.id == curso)];
        // cursosLista.push(_.filter(database.cursos, ['id', curso])[0]);
      });
      return cursosLista;
    },
  },
  Curso: {
    students: (parent) => {
      const listaEstudiantes: Array<any> = [];
      const idCurso = parent.id;
      database.estudiantes.map((elEstudiante) => {
        if (elEstudiante.courses.filter((idc: any) => idc == idCurso).length > 0) {
          listaEstudiantes.push(elEstudiante);
        }
      });
      return listaEstudiantes;
    },
    path: (parent) => `https://www.udemy.com${parent.path}`,
  },
};

export default type;
