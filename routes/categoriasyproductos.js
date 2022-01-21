const express = require('express');
const router = express.Router();
const CatandProdController = require('../controllers/CatandProdController')

router.post('/',CatandProdController.create)

module.exports = router;