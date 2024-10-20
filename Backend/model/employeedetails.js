const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    empId: { type: Number, required: true },
    empName: { type: String, required: true },
    empDesignation: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true }

});

const emp = mongoose.model('employees', empSchema);


module.exports = emp; 