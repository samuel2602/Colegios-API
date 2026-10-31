const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

router.get('/getRoles', rolController.getRoles);
router.get('/getRolById/:id', rolController.getRolById);
router.post('/postRol', rolController.postRol);
router.put('/putRol/:id', rolController.putRol);
router.delete('/deleteRol/:id', rolController.deleteRol);

module.exports = router;
