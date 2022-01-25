const express = require('express');
const router = express.Router();

const homecontroller = require("../controllers/home_controller");;

router.get('/', homecontroller.home);
router.post('/user', homecontroller.user);
router.post('/delete', homecontroller.delete);
router.post('/update', homecontroller.update);
module.exports = router;