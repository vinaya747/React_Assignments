import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Project from './components/Project';
import Service from './components/Service';
import Contact from './components/Contact';
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
  
const User=()=>
{
  return(<h1>welcome</h1>)
}


class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
      <div className="container">
      <ul>
       
        <li>
        <Link to="/" >Home</Link>
        </li>
     
        
        <li>
        <Link to="/project">Project</Link>
        </li>
     
      
        <li>
        <Link to="/service">Services</Link>
        </li>
       
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      
      </ul> 
      
      <Routes>
           <Route exact path='/' element={< Home />}></Route>
           <Route exact path='/project' element={< Project />}></Route>
           <Route exact path='/service' element={< Service />}></Route>
             
           <Route exact path='/contact' element={<Contact/>}></Route> 
       </Routes>
               
          
  
       </div>
      </div>
      </Router>

    );
  }
}

export default App;
