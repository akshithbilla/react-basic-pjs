import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Static components like Nav and Footer */}
      <Nav /> 

      {/* Dynamic routing */}
      <Routes>
        <Route path="/" element={<Contact />} /> 
        <Route path="/generatecat" element={<Home />} /> 
        <Route path="/agepredictor" element={<About />} />
         
        <Route path="/notesapp" element={<Projects />} />
        

        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
