const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: {type: String, require:true},
    type: {type: String, require:true},
    level: {type: Number, default:1},

})

module.exports = mongoose.model('Pokemon', PokemonSchema);