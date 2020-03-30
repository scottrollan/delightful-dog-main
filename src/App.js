import React from 'react';
import './App.css';
import Stripe from './components/Stripe'
import NavRouter from './components/NavRouter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stripe />
        <NavRouter />
      </header>
    </div>
  );
}

export default App;
