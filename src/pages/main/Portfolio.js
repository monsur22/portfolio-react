import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import port1 from '../../portfolio/portfolio-1.jpg'
import port2 from '../../portfolio/portfolio-2.jpg'
import port3 from '../../portfolio/portfolio-3.jpg'

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:8000/api/getportfolio")
    .then(function(response) {
        console.log(response.data);
        setData(response.data);

    })
    .catch(function(error) {
        console.log(error);
    });
    }, []);
console.log(data);
  const showbyId = (id) =>{
    console.log(id);
    // history.push("/edit/"+id);
  }
    return (
        <div>
          <section id="portfolio" className="portfolio section-show">
            <div className="container">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>My Works</p>
              </div>
              <div className="row portfolio-container">
              {data.map((item) => (
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src={port1} className="img-fluid" alt />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1" onClick = {() => showbyId(item.id)}></a>
                        {/* <Link className="edit-link" onClick = {() => showbyId(item.id)} >link</Link> */}
                        <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details" ><i className="bx bx-link" /></a>
                        <Link to = {`/Portfolio/${item.id}`} className="edit-link" onClick={() => showbyId(item.id)}>link</Link>
                      </div>
                    </div>
                  </div>
                </div>

               ))}


              </div>
            </div>
          </section>
        </div>
    )
}

export default Portfolio
