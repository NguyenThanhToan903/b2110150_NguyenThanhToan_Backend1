const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Conected to the Database!");

    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on post ${PORT}.`);
    });
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
}

startServer();

// const app = require("./app");
// const config = require("./app/config");

// //start server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on post ${PORT}.`);
// });
