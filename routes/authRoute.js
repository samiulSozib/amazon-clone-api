const router = require('express').Router();
const { signUp, signIn, checkToken, getUser } = require('../controllers/authController')
const auth = require('../middlewares/auth')

router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/checkToken', checkToken)
router.get('/', auth, getUser)

module.exports = router