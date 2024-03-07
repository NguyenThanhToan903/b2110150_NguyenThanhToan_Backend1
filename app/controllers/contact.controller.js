module.exports.create = (req, res) => {
  res.send({ message: "create handler" });
};

module.exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

module.exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

module.exports.update = (req, res) => {
  res.send({ message: "update handler" });
};

module.exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};

module.exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

module.exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
