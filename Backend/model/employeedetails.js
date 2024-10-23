const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    empId: String,
    empName: String,
    empDesignation: String,
    department: String,
    location: String,
    salary: String

});

const emp = mongoose.model('employees', empSchema);


module.exports = emp; 