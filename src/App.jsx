import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import InitPrompt from './components/InitPrompt';

import './assets/style/style.css';

export default function App() {
  const [hasBeenWelcomed, WelcomeUser] = useState(false);

  const handleWelcomeUser = () => {
    WelcomeUser(!hasBeenWelcomed);
  }

  const renderPage = () => {
    if(hasBeenWelcomed) {
      return <Home />
    } else {
      return <InitPrompt handleWelcomeUser={handleWelcomeUser} />
    }
  }

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

