const connection = require("../config/database")

const getHomepage = (req, res) => {
    return res.render('homePage.ejs')
}

const getLoginPage = (req, res) => {
    let users = []

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results
            res.send(JSON.stringify(users)); // results contains rows returned by server
            // console.log(">>>fields:", fields); // fields contains extra meta data about results, if available
        }
    );
}

const getSigninPage = (req, res) => {
    res.send('Signin page here')
}

const postCreateUser = (req, res) => {
    console.log(">>>req.body", req.body)
    res.send("create a user")
}

module.exports = {
    getHomepage, getLoginPage, getSigninPage,
    postCreateUser
}
