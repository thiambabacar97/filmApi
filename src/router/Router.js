const router = require('express').Router();
const FilmController = require('../controller/FilmController');

router.get('/films', FilmController.findAll)
router.post('/films', FilmController.createFilm)

module.exports = router;