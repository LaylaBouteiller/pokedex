const dataMapper = require('../dataMapper');

const mainController = {
  homePage: (req, res) => {
    dataMapper.getAllPokemon((error, data) => {
        if(error) {
            res.status(500).send(error);
            console.trace(error)
        } else {
          console.log(data)
            const pokemons = data;
            console.log(pokemons)
            res.render('home', {
                pokemons
            })
        }
    })
  },
  detailPage: (req, res) => {
    const id = req.params.id;
    dataMapper.getOnePokemon (id, (error, data) => {
        if(error) {
            res.status(500).send(error);
            console.trace(error)
        } else {
            const pokemons = data
            console.log(pokemons)
            res.render('details', {
                pokemons
            })
        }
    })
}
};


module.exports = mainController;