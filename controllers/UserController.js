const User          = require('../models/UserModel')
const bcrypt        = require('../helpers/bcryptHelper')
const jwt           = require('../helpers/tokenHelper')

module.exports      = {

    signup: (req, res) => {
        let name        = req.body.name
        let email       = req.body.email
        let password    = bcrypt.hash(req.body.password)

        User.find({email:email})
        .then(user => {
            if(user.length === 0) {
                User.create({
                    name, email, password
                })
                .then(newUser => {
                    res.status(200).json({
                        message: `Success to add ${newUser.name}`,
                        data: newUser,
                        token:jwt.encode({
                            id: newUser._id,
                            name: newUser.name,
                            email: newUser.email
                        })
                    })
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })

            } else {
                this.login(req, res)
                res.status(500).json({message:'Email already registered!'})
            }
        })
    },

    signin : (req, res) => {
        let email           = req.body.email
        let password        = req.body.password

        User.findOne({email: email})
        .then( user => {
            if(bcrypt.dehash(password, user.password)) { 
                res.status(200).json({
                    name: user.name,
                    token:jwt.encode({
                        id: user._id,
                        name: user.name,
                        email: user.email
                    })
                })
            } else {
                res.status(400).json({message:"Password is wrong"})
            }
        })
        .catch(err => {
            res.status(500).json({message:"Any wrong"})
        })
    }
}