const Usuario = require("./models/Usuario");
const Materia = require("./models/Materia");
const Inscrito = require("./models/Inscritos");

const resolvers = {
  Query: {
    hello: () => "Hello worlssssd",
    getAllUsers: async () => {
      const user = await Usuario.find();
      return user;
    },
    async getUser(_, { ci }) {
      return await Usuario.findById(ci);
    },
  },
  Mutation: {
    async createUser(parent, { usuario }, context, info) {
      const { ci, nombre, ap_paterno, ap_materno, fecha_nac } = usuario;
      const nuevoUsuario = new Usuario({ ci, nombre, ap_paterno, ap_materno, fecha_nac });
      await nuevoUsuario.save();
      return nuevoUsuario;
    },
    // async deleteTask(_, { id }) {
    //   await usuario.findByIdAndDelete(id);
    //   return "Task Deleted";
    // },
    // async updateTask(_, { id, task }) {
    //   const { title, description } = task;
    //   const newTask = await usuario.findByIdAndUpdate(
    //     id,
    //     {
    //       $set: {
    //         title,
    //         description,
    //       },
    //     },
    //     {
    //       new: true,
    //     }
    //   );
    //   return newTask;
    // },
  },
};

module.exports = {
  resolvers,
};
