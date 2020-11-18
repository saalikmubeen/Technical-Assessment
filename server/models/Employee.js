const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    position: {
        required: true,
        type: String
    }
});


const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;