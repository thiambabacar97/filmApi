const User = require('../models/User');

class UserController {
    static findAll(req, res) {
        User.findAll().then(result => {
            return res.status(200).json({
                status: "Success",
                data: result
            });
        }).catch(error => {
            return res.status(500).json({
                status: "Error",
                message: error
            });
        })
    }

}

module.exports = UserController;