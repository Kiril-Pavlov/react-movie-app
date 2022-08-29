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
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='wishlist' element={<Wishlist />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='*' element={<Navigate to="/" replace/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
