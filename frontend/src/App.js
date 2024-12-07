import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar'; // Import the Navbar component
import AdoptionPortal from './components/AdoptionPortal/AdoptionPortal';
import Services from './components/Services/Services';
import EventCalendar from './components/EventCalendar/EventCalendar';

function App() {
  return (
    <Router>
      <Navbar />  {/* Add Navbar here to make it accessible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/adoption' element={<AdoptionPortal />} />
        <Route path='/services' element={<Services />} />
        <Route path='/events' element={<EventCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
