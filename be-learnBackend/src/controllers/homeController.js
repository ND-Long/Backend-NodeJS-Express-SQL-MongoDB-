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
    res.send("Create success!")
}



module.exports = {
    getHomepage, postCreateUser, getCreateUserPage

}
