// App.js
import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section1/Section';
import SubSection from './Components/Sub_section';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <SubSection/>
      <Footer/>
    </div>
  );
}

export default App;

