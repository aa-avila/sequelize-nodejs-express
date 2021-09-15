const router = require('express').Router();
const UserCtrl = require('../controllers/userController');

router.post('/create', UserCtrl.createUser);
router.get('/users', UserCtrl.getUsers);
router.get('/users/:id', UserCtrl.getUser);
router.put('/users/:id', UserCtrl.updateUser);
router.delete('/users/:id', UserCtrl.deleteUser);



module.exports = router;

