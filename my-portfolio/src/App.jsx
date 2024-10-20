// App.jsx
import React from 'react';
import './App.css'; // Import your CSS files
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer/>
    </div>
   
  );
}

export default App;
