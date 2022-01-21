const { Categoriayproducto } = require('../models/index.js');

const CatandProdController = {
    create(req, res) {
        Categoriayproducto.create({...req.body })
            .then(catandprod => res.status(201).send({ message: 'Rekacion creada con éxito', catandprod }))
            .catch(console.error)
    },
}

module.exports = CatandProdController