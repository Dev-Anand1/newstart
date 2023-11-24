// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Update the path
import Footer from './components/Footer'; // Update the path

// Import your page components
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurActivity from './components/Activity';
import FuturePlan from './components/FuturePlan';
import OurEvents from './components/OurEvent';
import JoinUs from './components/JoinUs';
import ContactUs from './components/ContactUs';
import DonateUs from './components/Doneteus';
import Gallary from './components/Gallery';



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Activity" element={<OurActivity />} />
          <Route path="/FuturePlan" element={<FuturePlan />} />
          <Route path="/OurEvents" element={<OurEvents />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/DonateUs" element={<DonateUs />} />
          <Route path="/Gallary" element={<Gallary/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
