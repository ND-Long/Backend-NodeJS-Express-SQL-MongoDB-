const express = require('express')
const router = express.Router()
const { getHomepage, postCreateUser, getCreateUserPage } = require('../controllers/homeController')



//router.Method("./route",handler)
router.get('/', getHomepage)

router.get('/create', getCreateUserPage)

router.post('/create-user', postCreateUser)




module.exports = router //export default
