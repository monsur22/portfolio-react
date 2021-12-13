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

function App() {
  return (


    <div>
            <Header/>

      <Routes>
            {/* <Route path="/" element={<Header/>}/> */}

            <Route path="/about" element={<About/>}/>

      </Routes>

      <Footer/>

      </div>
  );
}

export default App;
