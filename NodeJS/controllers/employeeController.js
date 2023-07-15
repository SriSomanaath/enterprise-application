const express = require('express');
const router = express.Router();
const { Employee } = require('../models/employee');

// => localhost:3000/employees/
router.get('/', (req, res) => {
  Employee.find()
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
        console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
      res.status(500).send('Error in Retrieving Employees');
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save()
    .then(docs =>{
        res.send(docs);
    })
    .catch(err=>{ 
        console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); 
    });
});

module.exports = router;
