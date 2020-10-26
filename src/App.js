import React from 'react';
import './App.scss';
// import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      {/* <Header/> */}
      <Home/>
      <About/>
      <Service/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
