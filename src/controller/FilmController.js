const Film = require('../models/Film');
const upload = require('../middleware/uplaodImgMiddleware');
const multer = require('multer');

class FilmController {

    static findAll(req, res) {
        Film.findAll(films).then(result => {
            return res.status(200).json({
                status: 'Success',
                data: result,
                message: "Donne trouve"
            })
        }).catch(error => {
            return res.status(500).json({
                status: 'Error',
                message: 'Errorr detected !!!'
            })
        })
    }

    static createFilm(req, res) {
        upload(req, res, (err) => {
            // verifier si l;image envoyer est valide
            if (req.fileValidationError) {
                return res.status(401).json({
                    status: "Error",
                    message: req.fileValidationError
                })
            } else if (!req.file) {
                return res.status(401).json({
                    status: "Error",
                    message: "Veiller envoye un image SVP !!"
                })
            } else if (err instanceof multer.MulterError) {
                return res.status(401).json({
                    status: "Error",
                    message: err
                })
            } else if (err) {
                return res.status(401).json({
                    status: "Error",
                    message: err
                })
            }
            //contruire notre film object avec les donne du formulaire
            const { title, description } = req.body;
            const photo = req.file.filename;

            const film = new Film(title, description, photo);

            //enrigistrer l'objet dans la base de donne
            Film.createFilm(film, 'films').then(result => {
                res.status(201).json({
                    status: "Success",
                    data: result,
                    message: "created"
                })
            }).catch(error => {
                console.log(error);
            })
        })
    }
}
module.exports = FilmController;