const express = require('express')
const router = express.Router()
const { getHomepage, getLoginPage, getSigninPage, postCreateUser } = require('../controllers/homeController')



//router.Method("./route",handler)
router.get('/', getHomepage)

router.get('/login', getLoginPage)

router.get('/signin', getSigninPage)
router.post('/create-user', postCreateUser)

module.exports = router //export default
