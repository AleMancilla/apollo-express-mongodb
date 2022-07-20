const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Usuario {
    ci: String
    nombre: String
    ap_paterno: String
    ap_materno: String
    fecha_nac: String
  }
  type Materia {
    sigla: String
    nombre: String
    horario: String
  }

  type Inscritos {
    ci_usuario: String
    sigla_materia: String
  }

  type Query {
    hello: String
    getAllUsers: [Usuario]
    getUser(ci: String): Usuario
  }

  input UserInput {
    ci: String
    nombre: String
    ap_paterno: String
    ap_materno: String
    fecha_nac: String
  }

  type Mutation {
    createUser(usuario: UserInput): Usuario
    # deleteTask(id: ID): String
    # updateTask(id: ID, task: TaskInput): Task
  }
`;

module.exports = {
  typeDefs,
};
