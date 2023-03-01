const connection = require("../config/database")

const getHomepage = async (req, res) => {
    const [results, fields] = await connection.query('SELECT * FROM Users u')
    console.log(results)
    return res.render('homePage.ejs')
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

const getAllUser = async (req, res) => {

}

module.exports = {
    getHomepage,
    postCreateUser, getCreateUserPage
    , getAllUser
}
