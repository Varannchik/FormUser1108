const {Router} = require('express');
const router = Router();

router.get('/', function(req, res, next) {
    res.render('form');
});

module.exports = router;