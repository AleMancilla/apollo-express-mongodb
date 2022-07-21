const { connect } = require("mongoose");

const connectDb = async () => {
    console.log(" === > intentando conectar");
    try {
    await connect( "mongodb://localhost:27023/BDTEMPORADA2");
    console.log(" === > Mongodb connected");
  } catch (error) {
    console.log(" === > Mongodb error to connect");
    console.error(error);
  }
};

module.exports = { connectDb };
