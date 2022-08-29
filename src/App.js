import './App.css';
import { Routes, Route, Navigate } from 'react-router';

import Home from './pages/Home';
import Wishlist from './pages/Wishlist/Wishlist';
import Contact from './pages/Contact/Contact';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Wishlist />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
