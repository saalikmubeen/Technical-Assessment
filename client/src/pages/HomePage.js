import React from 'react';
import EmployeeList from "../components/EmployeeList";

function HomePage(props) {

   function handleClick(){
     props.history.push("/add");
   }
  return (
      <div>
          <h1>Home Page</h1> 
                 <button onClick={handleClick}>Add Employee</button>
                 <EmployeeList {...props} />
          }
      </div>
  );
}

export default HomePage;