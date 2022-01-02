import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from "./pages/account/login/Login";
import Registration from "./pages/account/registration/Registration";


function App() {
  return (


    <>


      <Routes>
            {/* <Route path="/" element={<Header/>}/> */}
            {/* Use for Git hub page */}
            {/* <Route path="/portfolio-react" element={<Home/>}/> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/*" element={<MainLayout/>}/>
            <Route path="/admin/*" element={<MainLayout/>}/>



      </Routes>



      </>
  );
}

export default App;
