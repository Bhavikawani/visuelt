import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Main />
    <Footer />
    <Switch>
      <Route path='/' exact/>
    </Switch>
    </Router>
    </>
       
  );
}

export default App;

