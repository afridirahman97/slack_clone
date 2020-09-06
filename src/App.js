import React, { useState } from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Login from './Login'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import Chat from './Chat'

function App() {
  const [ { user }, dispatch] = useStateValue();
  return (
    //BEM Naming convention 
    <div className="App">
      <Router>
        {!user ? (
         <Login />
        ) : (
        <>
       <Header />
      <div className="app__body">
        <Sidebar />
       <Switch>
         <Route path="/room/:roomId">
           
           <Chat/>
         </Route>
         <Route path="/">
           <h1>Welcome to Slack Clone</h1>
         </Route>
       </Switch>   
       </div>   
       </>

)}
        </Router>
        
    </div>
  );
}

export default App;
