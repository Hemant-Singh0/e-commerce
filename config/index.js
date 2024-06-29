var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("open", () => {
  console.log("Db Connected!");
});

db.on("error", console.error.bind(console, "Db connection error:"));

