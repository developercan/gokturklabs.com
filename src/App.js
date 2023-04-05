
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import MainMenu from "./components/navigation"
import Footer from "./components/Footer"
import Intern from "./pages/intern"
import Manifest from './pages/manifest';
import Projects from './pages/projects';
function App() {
  return (
    

<Router>
      
<MainMenu/>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/projects" element={<Projects/>} />
    <Route path='/internship' element={<Intern/>}/>
    <Route path='/manifest' element={<Manifest/>}/>
    <Route path="/admin/login" element={"<Login />"}/>
    <Route path="*" element={"<ErrorPage />"} />
  </Routes>
<Footer/>
</Router>
  );
}

export default App;
