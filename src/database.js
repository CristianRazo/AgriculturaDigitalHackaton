const mongoose = require("mongoose");
const URI = "mongodb+srv://admin:hackatontalentland@cluster0.stqw5.mongodb.net/Users?retryWrites=true&w=majority";

mongoose.connect(URI)
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));


module.exports = mongoose;