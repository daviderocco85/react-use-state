import { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion';
import { languages } from './data/languages.js'

const App = () => (
  <>
    <header className="container">
      <h1>Learn Web development</h1>
      <Accordion data={languages} />;
    </header>
  </>
);


export default App
