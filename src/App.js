import React from 'react';
import './App.css';
import {useLocation} from 'react-router';
import Nav from './Components/Nav/Nav';

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
