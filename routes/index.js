var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const pokemons = [
  { id: 1, name: 'Bulbasaur', type: 'Grass/Poison' },
  { id: 2, name: 'Charmander', type: 'Fire' },
  { id: 3, name: 'Squirtle', type: 'Water' },
  { id: 4, name: 'Pikachu', type: 'Electric' },
];


router.get('/pokemons', (req,res) => {
  res.json(pokemons)
})


module.exports = router;
