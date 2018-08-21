const router = require('express').Router()
const ArticleController = require('../controllers/ArticleController')
const isLogin = require('../middlewares/isLogin')

router.post('/', ArticleController.create)

module.exports = router