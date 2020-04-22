import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Body from './Components/Body';
import Error from './Components/Error';
import NavBar from './Components/NavBar';



function App() {
 

  
  return (
    
   <div className="">
     <div className="content">
     <BrowserRouter>
     <NavBar></NavBar>
      <Switch>
        <Route path='/'  component={Body} exact/>
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route component={Error} />
      </Switch>

  </BrowserRouter>
  </div>
    </div>
  );
}

export default App;
