const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');

router.get('/getMatriculas', matriculaController.getMatriculas);
router.get('/getMatriculaById/:id', matriculaController.getMatriculaById);
router.post('/postMatricula', matriculaController.postMatricula);
router.put('/putMatricula/:id', matriculaController.putMatricula);
router.delete('/deleteMatricula/:id', matriculaController.deleteMatricula);

module.exports = router;