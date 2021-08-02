import './App.css';
import Form from './components/form';
import Routes from './routes';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Heroes and Villains</h1>
        </header>
        <main className="container">
          <div className="container">
            <Form />
            <Routes/>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
