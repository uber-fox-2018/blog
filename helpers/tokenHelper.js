const jwt = require('jsonwebtoken')

module.exports = {
    decode: (token) => {
        let decode = jwt.verify(token, process.env.SECRET_KEY || 'asrul-harahap')
        return decode
    },
    encode: (obj) => {
        var token = jwt.sign(obj, process.env.SECRET_KEY || 'asrul-harahap');
        return token
    }
}