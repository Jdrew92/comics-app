import './App.css';
import Cards from './components/cards';
import Form from './components/form';
import React from 'react';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Comics Characters</h1>
      </header>
      <main className="container">
        <div className="container">
          <Form/>
        </div>
      </main>
    </div>
  );
}

export default App;
