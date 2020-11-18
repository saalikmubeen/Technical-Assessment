import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import "../styles/EmployeeList.css";
import {asyncSetEmployees, asyncDeleteEmployee} from "../actions/employees";

function EmployeeList(props) {

    useEffect(() => {
         props.dispatch(asyncSetEmployees())
    }, [])

    function handleDelete(id){
        props.dispatch(asyncDeleteEmployee(id))
    }

    function handleUpdate(id){
        props.history.push(`/employees/${id}/update`);
    }
    return (
        <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Edit Employee</th>
            <th>Delete Employee</th>
          </tr>
        </thead>
        <tbody>
            {props.employees && props.employees.map((employee) => {
                return <tr key={employee._id}>
                <td data-column="id">{employee._id}</td>
                <td data-column="Name">{employee.name}</td>
                <td data-column="Position">{employee.position}</td>
                <td data-column="Update">
                    <button onClick={() => handleUpdate(employee._id)}>Edit</button>
                </td>
                <td data-column="Delete">
                    <button onClick={() => handleDelete(employee._id)}>Delete</button>
                </td>
              </tr>
            })}
        </tbody>
      </table>
    )
}

function matchStateToProps(state){
     return {employees: state}
}


export default connect(matchStateToProps)(EmployeeList);
