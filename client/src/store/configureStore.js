import {createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";


const defaultEmployees = [
    {id: 1, name: "colt", position: 'web developer'},
    {id: 2, name: "dev ed", position: "web designer"},
    {id: 3, name: "brad", position: "instructor"}
]

function employeeReducer(state = defaultEmployees, action){
    switch(action.type){
        case "ADD_EMPLOYEE":
            return [...state, action.employee];
        case "UPDATE_EMPLOYEE":
            return state.map((employee) => {
                if(employee.id === Number(action.id)){
                    return {...employee, ...action.updates}
                }else{
                    return employee
                }
            })
        case "DELETE_EMPLOYEE":
            return state.filter((employee) => employee._id !== action.id)
        case "SET_EMPLOYEE":
            return action.employees
        default:
            return state
    }
};

const store = createStore(employeeReducer, applyMiddleware(thunk));

export function configureStore(){
    return store;
}

