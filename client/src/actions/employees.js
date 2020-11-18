import Employee from "../apis/employees";


export function setEmployees(employees){
    return {
        type: "SET_EMPLOYEE",
        employees: employees
    }
};

export function addEmployee(employee){
    return {
        type: "ADD_EMPLOYEE",
        employee: employee
    }
};

export function editEmployee(id, updates){
    return {
        type: "UPDATE_EMPLOYEE",
        updates: updates,
        id: id
    }
}

export function deleteEmployee(id){
    return {
        type: "DELETE_EMPLOYEE",
        id: id
    }
};

// ==============================================================
// async action generators;


export function asyncSetEmployees(id){
    return (dispatch, getState) => { 
        Employee.get("/").then((res) => {
            dispatch(setEmployees(res.data.employees));
        })

    }
}

export function asyncDeleteEmployee(id){
    return (dispatch, getState) => {
        Employee.delete(`/${id}`).then((res) => {
            dispatch(deleteEmployee(id));
        })
    }
}

export function asyncEditEmployee(id, updates){
    return (dispatch) => {
        Employee.put(`${id}`, updates).then((res) => {
            dispatch(editEmployee(id, res.data.employee))
        })
    }
}


export function asyncAddEmployee(employee){
    return (dispatch) => {
        Employee.post("/", employee).then((res) => {
            dispatch(addEmployee(employee));
        })
    }
}