const express = require('express');

const router = express.Router();

const contacsController = require('../controllers/contacts');

router.get('/', contacsController.getAll);
router.get("/:id", contacsController.getSingle);

module.exports = router;