import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
