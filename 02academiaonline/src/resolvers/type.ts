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
};

export default type;
