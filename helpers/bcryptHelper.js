const bcrypt = require('bcryptjs')

module.exports = {

    hash: (password, saltValue = 10) => {
        var salt = bcrypt.genSaltSync(saltValue)
        var hash = bcrypt.hashSync(password, salt)
        return hash
    },

    dehash: (passwordCheck, passwordDb) => {
        var check = bcrypt.compareSync(passwordCheck, passwordDb)
        return check
    }
}