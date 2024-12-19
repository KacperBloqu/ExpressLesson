const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');


const mongoUri = 'mongodb://localhost:27017/pokedex';

const connectDB = async () => {
    try{
        await mongoose.connect(mongoUri);
        const pokemons = [
            { id: 1, name: 'Bulbasaur', type: 'Grass/Poison' },
            { id: 2, name: 'Charmander', type: 'Fire' },
            { id: 3, name: 'Squirtle', type: 'Water' },
            { id: 4, name: 'Pikachu', type: 'Electric' },
        ];
        await Pokemon.insertMany(pokemons);
        console.log("Pokedex added")
        process.exit(0);
    } catch (e) {
        console.log(e)
        process.exit(1);
    }
}
connectDB();

