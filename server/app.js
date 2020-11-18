const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost/technical_assessment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const Employee = require("./models/Employee");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "HEllo World"})
})


app.post("/api/employees", async (req, res) => {
      try{
        const {name, position} = req.body;
        const employee = await Employee.create({name, position});
 
        res.status(201).json({
            status: "success",
            results: 1,
            employee: employee
        })
      }catch(err){
        res.status(400).json({
            status: "error",
            error: err.message
        })
      }
})


app.get("/api/employees", async (req, res) => {
     try{
         const employees = await Employee.find({});

         res.status(200).json({
            status: "success",
            results: employees.length,
            employees: employees
        })

     }catch(err){
        res.status(400).json({
            status: "error",
            error: err.message
        })
     }
});


app.put("/api/employees/:id", async (req, res) => {
    try{
        const {name, position} = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, {name, position}, {new: true});
        
        res.status(200).json({
            status: "success",
            results: 1,
            employee: updatedEmployee
        })

    }catch(err){
        res.status(400).json({
            status: "error",
            error: err.message
        })
    }
})


app.delete("/api/employees/:id", async (req, res) => {
    try{
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        
        res.status(204).json({
            status: "success"
        })

    }catch(err){
        res.status(400).json({
            status: "error",
            error: err.message
        })
    }
})

app.all("*", async (req, res) => {
    res.status(404).send("404! No Content.")
})




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT ${PORT}....!`)
})