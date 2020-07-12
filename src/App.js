import React,{Component} from 'react';
import './App.css';
import {useLocation} from 'react-router';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Form/Form';
import routes from './routes';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname!=='/'?<Nav/>:null}
      {routes}
    </div>
  );
}


export default App;
