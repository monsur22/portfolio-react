import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Footer from './pages/main/Footer';


function App() {
  return (


    <div>


      <Routes>
            {/* <Route path="/" element={<Header/>}/> */}
            {/* Use for Git hub page */}
            {/* <Route path="/portfolio-react" element={<Home/>}/> */}
            <Route path="/*" element={<MainLayout/>}/>
            <Route path="/admin/*" element={<MainLayout/>}/>
          


      </Routes>



      </div>
  );
}

export default App;
