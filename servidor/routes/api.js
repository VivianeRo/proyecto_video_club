const express = require ('express');
const router = express.Router();
const movie = [
    {
        id : 1 ,
        title : 'Morden family',
        descripcion : 'Una familia apezar de sus diferecias estan unidas por el amor',
    cantidadDeTemporada : 11
    },
    {
        id : 2 ,
        title : 'Criminal minds',
        descripcion : 'Un equipo de elite de analista psicologico del FBI estudia las mentes de los criminales',
     cantidadDeTemporada : 15,
    },
    {
        id :3 ,
        title : 'New Amsterdan',
        descripcion : 'El brillante Dr Max Goodwin no se dentredra ante nada para darle un nuevo aliento al hospital donde trabaja',
     cantidadDeTemporada : 4,
    },

    {
        id : 4 ,
        title : 'Station 19' ,
        descripcion : 'Un equipo de bomberos que supera dia a dia las dificultades que van surgiendo',
    cantidadDeTemporada : 5

    },
];

router.get("/api/movies", (req, res) => {
    // respondo al cliente con el array de peliculas
    res.json(movies);
  });
  
  
  router.get("/api/movies/:id", (req, res) => {
    const id = req.params.id;
  
    
    const movie = movies.find(function (pelicula) {
      return pelicula.id == id;
    });
  
    
    if (!movie) {
      return res.status(404).send(`La pelicula con id ${id} no existe.`);
    }
  
    
    res.json(movie);
  });
  

  module.exports = router;
    
