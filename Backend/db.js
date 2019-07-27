var mongoose = require('mongoose');

mongoose.connect(("mongodb://localhost/crypto"),{ useNewUrlParser: true });

var cryptoSchema = new mongoose.Schema({
    currency : String,
    crypto : String,
    trade: String
})

var crypto = mongoose.model("Currency",cryptoSchema);


module.exports = (crypto);

