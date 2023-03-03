const connection = require("../config/database")
const { getAllUsers } = require('../services/CRUDService')


const getHomepage = async (req, res) => {
    const results = await getAllUsers()
    return res.render('homePage.ejs', { listUsers: results })
}


const getCreateUserPage = (req, res) => {
    return res.render('createUser.ejs')
}



const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name,city) VALUES (?,?,?)`,
        [email, name, city],
    );
    res.redirect("/")
}

const getUpdateUserPage = async (req, res) => {
    let userId = req.params.id
    const [results, fields] = await connection.query(`select * from Users where id = ${userId}`)
    const user = results && results.length > 0 ? results[0] : {}
    res.render('updateUser.ejs', { userInfo: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userId = req.body.userId
    const [results, fields] = await connection.query(`update Users 
    set email =?,name=?,city=?
    where id = ?`, [email, name, city, userId])
    res.redirect("/")
}

const postDeleteUser = async (req, res) => {
    let userId = req.params.id
    const [results, fields] = await connection.query(`select * from Users where id = ${userId}`)
    const user = results && results.length > 0 ? results[0] : {}
    res.render("deleteUser.ejs", { userInfor: user })
}


const postHandleDeleteUser = async (req, res) => {
    let userId = req.body.id
    const [results, fields] = await connection.query(`DELETE FROM Users WHERE id=?`, [userId])
    console.log(userId)
    res.redirect("/")
}



module.exports = {
    getHomepage, postCreateUser, getCreateUserPage,
    getUpdateUserPage, postUpdateUser, postDeleteUser,
    postHandleDeleteUser
}
