import './App.css';
import Header from './components/common/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
library.add(fab, faUserCircle)