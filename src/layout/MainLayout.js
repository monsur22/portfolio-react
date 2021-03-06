import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    Outlet,
    Link
  } from "react-router-dom";
import Header from '../pages/main/Header';
import Footer from '../pages/main/Footer';
import Home from '../pages/main/Home';
import About from '../pages/main/About';
import Contact from '../pages/main/Contact';
import Portfolio from '../pages/main/Portfolio';
import Services from '../pages/main/Services';
import Resume from '../pages/main/Resume';
import PortfolioById  from '../pages/main/PortfolioById';
const MainLayout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/Portfolio/:id" element={<PortfolioById/>}/>
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/about" element={<About/>}/>

            </Routes>

            <Footer/>
        </>
    )
}

export default MainLayout
