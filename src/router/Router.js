const router = require('express').Router();
const FilmController = require('../controller/FilmController');
const cors = require('cors');

const corsOptions = {
    origin: '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200
}

router.get('/films', cors(corsOptions), FilmController.findAll);
router.post('/films', cors(corsOptions), FilmController.createFilm);
router.get('/films/:id', cors(corsOptions), FilmController.showFilm);
router.put('/films/:id', cors(corsOptions), FilmController.updateFilm);
router.delete('/films/:id', cors(corsOptions), FilmController.deleteFilm);


module.exports = router;