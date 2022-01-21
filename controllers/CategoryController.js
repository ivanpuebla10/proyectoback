const { Categoria } = require('../models/index.js');

const CategoryController = {
    create(req, res) {
        Categoria.create({...req.body })
            .then(category => res.status(201).send({ message: 'Categoria creada con éxito', category }))
            .catch(console.error)
    },
}

module.exports = CategoryController