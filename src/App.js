import React from 'react';
import './App.css';
import Nav from './body/nav.js';
import Rules from './body/rules.js'
import MainBody from './body/mainBody.js';



function App() {
  return (
    <div className='app'>
      <header className='header'>
        <Nav />
      </header>
      <section className='body'>
        <MainBody />
        <Rules />
      </section>
    </div>
  );
}

export default App;
