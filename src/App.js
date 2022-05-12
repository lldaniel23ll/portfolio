import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/services' element={<Services /> } />
          <Route path='/contact' element={<Contact /> } />
          <Route path='*' element={<NotFound /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
