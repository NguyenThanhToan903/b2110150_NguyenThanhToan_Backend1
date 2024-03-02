const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    uri: process.env.MONDODB_URI || "mongodb://127.0.0.1:27017/contackbook",
  },
};

module.exports = config;
