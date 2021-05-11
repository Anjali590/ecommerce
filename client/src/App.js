import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './component/nav/header';
import RegisterComplete from './pages/auth/RegisterComplete';




const App = () => {
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component ={Register}/>  
        <Route exact path="/register/complete" component ={RegisterComplete}/>
      </Switch>
    </div>
  );
}

export default App;
