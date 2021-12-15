import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Home from './pages/Home';
// import Contact from './pages/Contact';

function App() {
  return (


    <div>
            <Header/>

      <Routes>
            {/* <Route path="/" element={<Header/>}/> */}
            {/* Use for Git hub page */}
            {/* <Route path="/portfolio-react" element={<Home/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/Resume" element={<Resume/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>


      </Routes>

      <Footer/>

      </div>
  );
}

export default App;
