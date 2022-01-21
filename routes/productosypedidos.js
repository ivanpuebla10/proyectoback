const express = require('express');
const router = express.Router();
const ProdandCatController = require('../controllers/ProdandCatController')

router.post('/',ProdandCatController.create)

module.exports = router;