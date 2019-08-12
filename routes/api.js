const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/', function(req, res, next) {
    fs.appendFile("./views/users.txt", req.body.name+' : '+req.body.age+'\n', function(error){
        if(error) throw error;
    });    
    res.render('form');
});

module.exports = router;