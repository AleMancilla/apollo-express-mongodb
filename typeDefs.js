const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Usuario {
    id: ID
    ci: String
    nombre: String
    ap_paterno: String
    ap_materno: String
    fecha_nac: String
  }
  type Materia {
    id: ID
    sigla: String
    nombre: String
    horario: String
  }

  type Inscritos {
    id: ID
    ci_usuario: String
    sigla_materia: String
  }

  type Query {
    hello: String
    getAllUsers: [Usuario]
    getAllMaterias: [Materia]
    getAllInscritos: [Inscritos]
    getUser(id: ID): Usuario
    getMateria(id: ID): Materia
    getInscrito(id: ID): Inscritos
  }

  input UserInput {
    ci: String
    nombre: String
    ap_paterno: String
    ap_materno: String
    fecha_nac: String
  }
  input MateriaInput {
    sigla: String
    nombre: String
    horario: String
  }
  input InscritosInput {
    ci_usuario: String
    sigla_materia: String
  }

  type Mutation {
    createUsuario(usuario: UserInput): Usuario
    createMateria(materia: MateriaInput): Materia
    createInscritos(inscrito: InscritosInput): Inscritos
    deleteUsuario(id: ID): String
    deleteMateria(id: ID): String
    deleteInscrito(id: ID): String
    updateUsuario(id: ID, usuario: UserInput): Usuario
    updateMateria(id: ID, materia: MateriaInput): Usuario
    # updateTask(id: ID, task: TaskInput): Task
  }
`;

module.exports = {
  typeDefs,
};
