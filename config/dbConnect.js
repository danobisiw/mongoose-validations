const { connect } = require("mongoose");

async function dbConnect() {
  try {
    await connect("mongodb://localhost:27017/shop", {});
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = { dbConnect };
