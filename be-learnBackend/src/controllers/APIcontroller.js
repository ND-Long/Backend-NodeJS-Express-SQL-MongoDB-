const connection = require("../config/database")

const getList = async (req, res) => {
    const [results, fields] = await connection.query('SELECT * FROM Users u')
    return res.status(200).json({
        message: "Get all users success",
        data: results
    })
}
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name,city) VALUES (?,?,?)`,
        [email, name, city],
    );

    if (!email || !name || !city) {
        return res.status(200).json({
            message: "Invalid email/name/city"
        })
    }
    return res.status(200).json({
        message: "Create user success!",
    })
}

const putUpdateUser = async (req, res) => {
    let { email, name, city } = req.body
    let id = req.params.id
    if (!email || !name || !city || !id) {
        return res.status(200).json({
            message: "Invalid input"
        })
    }
    const [results, fields] = await connection.query(`update Users 
    set email =?,name=?,city=?
    where id = ?`, [email, name, city, id])
    return res.status(200).json({
        message: "Update user success!",
    })
}


const deleteUser = async (req, res) => {
    let userId = req.params.id
    const [results, fields] = await connection.query(`DELETE FROM Users WHERE id=?`, [userId])

    return res.status(200).json({
        message: "Delete user success!",
    })
}

module.exports = { getList, postCreateUser, deleteUser, putUpdateUser }
