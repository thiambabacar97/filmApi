const connexion = require('../config/db')

class User {

    static findAll() {
        const req = "SELECT * FROM livres"
        return new Promise((resolve, reject) => {
            connexion.query('SELECT * FROM livres', (error, result) => {
                if (error) return reject(error)
                return resolve(result)
            })
        })
    }
}
module.exports = User;


// const uploadimg = upload.single('photo')
// uploadimg(req, res, (err)=> {
//         if (err instanceof multer.MulterError) {
//             console.log(err);
//             // res.status(201).json(err)
//         } else if (err) {
//             const errrr = JSON.stringify(err);
//             res.status(201).json(errrr)
//             console.log(err);
//         }
//     })
// const body = req.body
// const { title, description } = req.body;
// const photo = req.file.filename;
// const film = new Film(title, description, photo);