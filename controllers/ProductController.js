const { Producto } = require('../models/index.js');

const ProductController = {
    create(req, res) {
        Producto.create({...req.body })
            .then(product => res.status(201).send({ message: 'Producto creado con éxito', product }))
            .catch(console.error)
    },
}

module.exports = ProductController;

