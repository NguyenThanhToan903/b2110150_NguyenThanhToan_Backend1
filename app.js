// const app = require("./app");
// const config = require("./app/config");

// const MongoDB = require("./app/utils/mongodb.utils");

// async function startServer() {
//   try {
//     await MongoDB.connect(config.db.uri);
//     console.log("Connected to the database!");
//     const PORT = config.app.port;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log("Cannot connect to the database!", error);
//     process.exit();
//   }
// }

// startServer();

const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = express();

const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application!" });
});

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});
module.exports = app;
