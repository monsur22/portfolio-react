import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    Outlet,
    Link
  } from "react-router-dom";
import Header from '../pages/admin/Header';
import Footer from '../pages/admin/Footer';
import Home from '../pages/admin/Home';


const AdminLayout = () => {
    return (
        <>
            <Header/>
            <Routes>



                    <Route path="/" element={<Home/>}/>
                    {/* <Route path="/contact" element={<Contact/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/Resume" element={<Resume/>}/>
                    <Route path="/Services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/> */}

            </Routes>

            <Footer/>
        </>
    )
}

export default AdminLayout
