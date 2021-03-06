import './App.css';
import Header from './components/common/Header/Header';
import Home from './components/pages/Home/Home';
import Login from './components/pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/common/Footer/Footer';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
library.add(fab, faUserCircle, faSignOutAlt)