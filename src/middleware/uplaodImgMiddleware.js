const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uplaod');
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype === "image/jpg") {
        cb(null, true);
    } else {
        req.fileValidationError = 'Image format non accepte';
        return cb(new Error('Only image files are allowed!'), false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter }).single('photo');

module.exports = upload;