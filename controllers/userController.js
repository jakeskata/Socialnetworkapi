const { User } = require('../models');

module.exports = {
    
    createUser: ({body},res) =>User.create(body).then(data=>res.json(data)),

    getUsers: (req,res) => User.find().then(data=>res.json(data))
}