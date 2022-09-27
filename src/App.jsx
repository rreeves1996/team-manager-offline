import React, { useState } from 'react';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import About from './components/About';


import './assets/style/style.css';
import InitPrompt from './components/InitPrompt';
import { render } from '@testing-library/react';


export default function App() {
  const [page, changePage] = useState("Init");

  const renderPage = () => {
    switch(page) {
      case "Init":
          return <InitPrompt page={page} handlePageChange={handlePageChange} />;
      case "Home":
        return <Home handlePageChange={handlePageChange} />;
      default:
        return <Home />
    }
  }

  const handlePageChange = (page) => changePage(page);

  return (
    <>
      <Navbar />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

