import React from 'react'
import {connect} from "react-redux";
import EditForm from "../components/EditForm";

function UpdatePage(props) {
    return (
        <div>
            <h1>Update page</h1>
            <EditForm employee={props.employee[0]} type="edit"/>
        </div>
    )
}

function matchStateToProps(state, props){
    return {employee: state.filter((employee) => employee._id === props.match.params.id)}
}

export default connect(matchStateToProps)(UpdatePage);