const connection = require('./dataBase');

const dataMapper = {

  getAllPokemon: (callback) => {
	        const query = "SELECT * FROM `pokemon`";
          connection.query(query,callback)
      },
      getOnePokemon: (id, callback) => {
        const query = ` SELECT * FROM pokemon WHERE pokemon.id=?`;
        const values = [id]
        connection.query(query, values, callback);
    }
};

module.exports = dataMapper; 