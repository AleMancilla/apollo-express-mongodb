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
    getAllMaterias: async () => {
      const user = await Materia.find();
      return user;
    },
    getAllInscritos: async () => {
      const user = await Inscrito.find();
      return user;
    },
    async getUser(_, { id }) {
      return await Usuario.findById(id);
    },
    async getMateria(_, { id }) {
      return await Materia.findById(id);
    },
    async getInscrito(_, { id }) {
      return await Inscrito.findById(id);
    },
  },
  Mutation: {
    // CREANDO DATOS
    async createUsuario(parent, { usuario }, context, info) {
      const { ci, nombre, ap_paterno, ap_materno, fecha_nac } = usuario;
      const nuevoUsuario = new Usuario({ ci, nombre, ap_paterno, ap_materno, fecha_nac });
      await nuevoUsuario.save();
      return nuevoUsuario;
    },
    async createMateria(parent, { materia }, context, info) {
      const { sigla,nombre,horario } = materia;
      const nuevoMateria = new Materia({ sigla,nombre,horario });
      await nuevoMateria.save();
      return nuevoMateria;
    },
    async createInscritos(parent, { inscrito }, context, info) {
      const { ci_usuario, sigla_materia } = inscrito;
      const nuevoInscrito = new Inscrito({ ci_usuario, sigla_materia });
      await nuevoInscrito.save();
      return nuevoInscrito;
    },

    // BORRANDO DATOS
    async deleteUsuario(_, { id }) {
      await Usuario.findByIdAndDelete(id);
      return "Usuario Borrado";
    },
    async deleteMateria(_, { id }) {
      await Materia.findByIdAndDelete(id);
      return "Materia Borrada";
    },
    async deleteInscrito(_, { id  }) {
      
      await Inscrito.findByIdAndDelete(id);
      return "Inscrito Borrado";
    },
    // ACTUALIZANDO DATOS
    async updateUsuario(_, { id, usuario }) {
      const {  ci, nombre, ap_paterno, ap_materno, fecha_nac } = usuario;
      const newUsuario = await Usuario.findByIdAndUpdate(
        id,
        {
          $set: {
             ci, nombre, ap_paterno, ap_materno, fecha_nac
          },
        },
        {
          new: true,
        }
      );
      return newUsuario;
    },
    async updateMateria(_, { id, materia }) {
      const {  sigla, nombre,horario } = materia;
      const newMateria = await Materia.findByIdAndUpdate(
        id,
        {
          $set: {
            sigla, nombre,horario
          },
        },
        {
          new: true,
        }
      );
      return newMateria;
    },
    // async updateInscritos(_, { sigla, inscrito }) {
    //   const {  ci_usuario, sigla_materia  } = inscrito;
    //   const newInscrito = await Inscrito.findByIdAndUpdate(
    //     sigla,
    //     {
    //       $set: {
    //          ci_usuario, sigla_materia 
    //       },
    //     },
    //     {
    //       new: true,
    //     }
    //   );
    //   return newInscrito;
    // },
  },
};

module.exports = {
  resolvers,
};
