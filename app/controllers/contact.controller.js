exports.create = async (req, res, next) => {
  if (!req.body?.name) {
    return next(new ApiError(400, "Name can not be empty"));
  }

  try {
    const ContactService = new ContactService(MongoDB.client);
    const document = await ContactService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
};

// module.exports.create = (req, res) => {
//   res.send({ message: "create handler" });
// };

// module.exports.findAll = (req, res) => {
//   res.send({ message: "findAll handler" });
// };

// module.exports.findOne = (req, res) => {
//   res.send({ message: "findOne handler" });
// };

// module.exports.update = (req, res) => {
//   res.send({ message: "update handler" });
// };
// module.exports.delete = (req, res) => {
//   res.send({ message: "delete handler" });
// };
// module.exports.deleteAll = (req, res) => {
//   res.send({ message: "deleteAll handler" });
// };

// module.exports.finlAllFavorite = (req, res) => {
//   res.send({ message: "finlAllFavorite handler" });
// };
