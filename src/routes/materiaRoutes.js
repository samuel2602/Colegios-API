const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');

router.get('/getMaterias', materiaController.getMaterias);
router.get('/getMateriaById/:id', materiaController.getMateriaById);
router.post('/postMateria', materiaController.postMateria);
router.put('/putMateria/:id', materiaController.putMateria);
router.delete('/deleteMateria/:id', materiaController.deleteMateria);

module.exports = router;
