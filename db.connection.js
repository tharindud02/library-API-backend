const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
const { MongoClient, ServerApiVersion } = require("mongodb");
mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then(
    () => {
      console.log("Database Connected...\u2705");
    },
    (error) => {
      console.log("Database Can't Connect: \u274C" + error);
    }
  );
