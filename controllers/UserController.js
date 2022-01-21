const { Usuario } = require('../models/index.js');

const UserController = {
    create(req, res) {
        req.body.rol = "user";
        Usuario.create({...req.body })
            .then(user => res.status(201).send({ message: 'Usuario creado con éxito', user }))
            .catch(console.error)
    },
}

module.exports = UserController;