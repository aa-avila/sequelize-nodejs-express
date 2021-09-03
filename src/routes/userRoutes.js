const router = require('express').Router();
const UserCtrl = require('../controllers/userController');

router.get('/users', UserCtrl.getUsers);
router.get('/create', UserCtrl.createUser);

module.exports = router;

