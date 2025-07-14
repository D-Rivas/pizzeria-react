import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Cart from './components/Cart';

function App() {
  // const [page, setPage] = useState('home');  

  // let content;
  // if (page === 'login') {
  //   content = <LoginPage />;
  // } else if (page === 'register') {
  //   content = <RegisterPage />;
  // } else {
  //   content = <Home />;
  // }

  return (
    <>
      <Navbar />
       {/* <Home /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;