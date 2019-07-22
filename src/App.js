import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    
    <Route path = "/" exact component = {Home} />
    <Route path = "/about" exact component = {About} />
    <Route path = "/contact" exact component = {Contact} /> 
    <Navigation />

  </div>
);

export default App;
