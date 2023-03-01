const express = require('express')
const router = express.Router()
const { getHomepage, getLoginPage, getSigninPage } = require('../controllers/homeController')



//router.Method("./route",handler)
router.get('/', getHomepage)

router.get('/login', getLoginPage)

router.get('/signin', getSigninPage)

module.exports = router //export default
