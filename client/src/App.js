import React from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";

function App(){
   return(
      <Switch>
         <Route path="/" exact component={HomePage}/>
         <Route path="/employees/:id" exact component={DetailPage}/>
         <Route path="/employees/:id/update" exact component={UpdatePage}/>
         <Route path="/add" exact component={AddPage}/>
      </Switch>
   )
};

export default App;
