const express = require('express')
const router = express.Router()
const { getList, postCreateUser, deleteUser, putUpdateUser } = require("../controllers/APIcontroller")


//router.Method("./route",handler)

router.get('/api/v1/users', getList)

router.post('/api/v1/create-user', postCreateUser)

router.put('/api/v1/update-user/:id', putUpdateUser)

router.delete('/api/v1/delete-user/:id', deleteUser)



module.exports = router


