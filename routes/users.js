const fs = require('fs');
const express = require('express');
const router = express.Router();

const arr = fs.readFile("./views/users.txt", "utf8", function(error,data){        
        if(error) throw error;
        console.log(data);   
    });
router.get('/', function(req, res) {        
    res.send(`<div>${arr}</div>`);
});

module.exports = router;