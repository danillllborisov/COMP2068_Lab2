'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
    console.log(req.query);
    
    console.log(req.query.method)

    //function for simple calculator
    function newLab2(x, y, method) {

        if (method == "add") { //adddition
            console.log(x + y)
        }
        else if (method == "subtract") { //substraction
            console.log(x - y)
        }
        else if (method == "multiply") { //multiplication 
            console.log(x * y)
        }
        else if (method == "divide") { //division 
            console.log(x / y)
        }
    }
    //using parse to create our url and use the function above to get our calculations
    newLab2(parseInt(req.query.x), parseInt(req.query.y), req.query.method)

    res.render('index', { title: 'Express' });
});

module.exports = router;