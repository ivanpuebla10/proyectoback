const { Productoypedido } = require('../models/index.js');

const ProdandCatController = {
    create(req, res) {
        Productoypedido.create({...req.body })
            .then(prodandcat => res.status(201).send({ message: 'Relacion creada con éxito', prodandcat }))
            .catch(console.error)
    },
}

module.exports = ProdandCatController