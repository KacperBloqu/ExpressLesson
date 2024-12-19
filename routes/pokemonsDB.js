var express = require('express');
var router = express.Router();
const Pokemon = require('../models/pokemon');

router.get('/', async(req, res) => {
    try{
        const pokemons = await Pokemon.find();
        res.json(pokemons);

    } catch (e) {
        console.log(e);
        res.status(500).json({error:"Error occurred"})
    }
} )


router.get('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const pokemon = await Pokemon.findById(id);
        if(!pokemon) {
            res.status(404).json({error: "Pokemon not found"})
        }

    } catch (e) {
        console.log(e);
    }
})