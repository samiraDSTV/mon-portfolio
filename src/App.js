import './App.css';
import './Styles.css';
import './scripts';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Projet from './components/Projet';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer'; // Ajout du composant Footer
/* import MyComponent from './components/MyComponent'; */ // Ajout du composant Footer
import CountdownTimer from './components/MyComponent';

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      <Navbar />
      <div className="container-fluid">
        <Home/>
        <About />
        <Service />
        <CountdownTimer />
        <Projet />
        <Contact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;