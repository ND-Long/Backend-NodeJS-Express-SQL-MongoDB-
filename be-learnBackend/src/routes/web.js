const express = require('express')
const router = express.Router()
const { getHomepage, postCreateUser,
    getCreateUserPage, getUpdateUserPage,
    postUpdateUser, postDeleteUser,
    postHandleDeleteUser
} = require('../controllers/homeController')



//router.Method("./route",handler)
router.get('/', getHomepage)

router.get('/create', getCreateUserPage)

router.get('/update/:id', getUpdateUserPage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)


router.post('/delete/:id', postDeleteUser)


router.post('/delete-user', postHandleDeleteUser)




module.exports = router //export default
