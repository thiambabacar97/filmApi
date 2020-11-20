const router = require('express').Router();
const FilmController = require('../controller/FilmController');

router.get('/films', FilmController.findAll)
router.post('/films', FilmController.createFilm)
router.get('/films/:id', FilmController.showFilm)
router.put('/films/:id', FilmController.updateFilm)
router.delete('/films/:id', FilmController.deleteFilm)


module.exports = router;