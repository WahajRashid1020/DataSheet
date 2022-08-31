const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WahajRashid:Wahaj1812214!@items-database.8mzu1.mongodb.net/mern-database",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = {
  Student: require("./Student"),
};
