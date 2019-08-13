const fs = require('fs');
const express = require('express');
const router = express.Router();
const requireJson = require('plain-text-data-to-json');

    router.get('/', function(req, res) {        
        const arrUsers = fs.readFileSync("./views/users.txt", "utf8");
        console.log(arrUsers);
        const addUsers = requireJson(arrUsers);
        res.send(`${JSON.stringify(addUsers)}`); 
    }); 

module.exports = router;