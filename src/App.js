import React from 'react';
import './App.css';
import Nav from './body/nav.js';
import CABody from './CA-grid/ca-body.js';



function App() {
  return (
    <div className='app'>
      <header className='header'>
        <Nav />
      </header>
      <section className='body'>
        <CABody />
      </section>
    </div>
  );
}

export default App;
