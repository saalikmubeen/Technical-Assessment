import React, {useState} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "../styles/EditForm.css";
import {asyncEditEmployee, asyncAddEmployee} from "../actions/employees";

function EditForm(props) {
     const [name, setName] = useState(props.employee ? props.employee.name : "");
     const [position, setPosition] = useState(props.employee ? props.employee.position : "");

     function handleSubmit(e){
         e.preventDefault();
         
         if(props.type === "edit"){
            props.dispatch(asyncEditEmployee(props.employee._id, {name, position}));
         }

         if(props.type === "add"){
             props.dispatch(asyncAddEmployee({name, position}));
         }

        props.history.push("/");
     }
    return (
         <div>
             <h1>{props.type === "add" ? "Add Employee" : "Edit Employee"}</h1>
             <form>

                 <label>
                  <input id="fname" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                  <span>Name</span>
                 </label>

                 <label>
                 <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}/>
                 <span>Position</span>
                 </label>

                 <input type="submit" onClick={handleSubmit}></input>
                 {/* <button>{props.type === "add" ? "Add Employee" : "Edit Employee"}</button> */}
             </form>
         </div>
    )
}

export default withRouter(connect()(EditForm));